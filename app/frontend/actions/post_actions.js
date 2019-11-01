import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const createPost = post => dispatch => {
    debugger
    return APIPostUtil.createPost(post).then(post => dispatch(receivePost(post)))
}
export const fetchPosts = posts => dispatch => {
    return APIPostUtil.fetchPosts(posts).then(posts => dispatch(receivePosts(posts)))
}
export const fetchPost = postId => dispatch => {
    return APIPostUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
}
export const deletePost = postId => dispatch => {
    return APIPostUtil.deletePost(postId).then((post) => dispatch(removePost(post.id)))
}

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