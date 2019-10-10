import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

// export const UPDATE_USER = "UPDATE_USER";

const receiveCurrentUser = (user) => {
  // debugger
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})
// **************

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})
// *************

// const updateUser = user => ({
//   type: UPDATE_USER,
//   user
// })

export const login = (user) => (dispatch) => {
  // this takes it to reducer
  // debugger
  // receive the promise that failed ... .responseJSON
  return APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), ({responseJSON}) => {
    // debugger
    dispatch(receiveSessionErrors(responseJSON)) }
  );
}

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(user => dispatch(logoutCurrentUser()), error => dispatch(receiveSessionErrors(error)));
}

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveSessionErrors(error)));
}

export const fetchUser = (userId) => (dispatch) => {
  // debugger
  return APIUtil.fetchUser(userId).then(user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveSessionErrors(error)));
}

// USER UPDATE

export const updateUser = user => dispatch => {
  debugger
  return APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
}

// ********************************************

//  RECEIVE SESSION ERROR?????

export const createPost = post => dispatch => {
  return APIUtil.createPost(post).then(post => dispatch(receivePost(post)))
}
export const fetchPosts = posts => dispatch => {
  return APIUtil.fetchPosts(posts).then(posts => dispatch(receivePosts(posts)))
}
export const fetchPost = postId => dispatch => {
  return APIUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
}
export const deletePost = postId => dispatch => {
  return APIUtil.deletePost(postId).then((post) => dispatch(removePost()))
}
