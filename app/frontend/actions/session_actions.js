import * as APISessionUtil from '../util/session_api_util';
import * as APIUserUtil from '../util/user_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const signup = (user) => (dispatch) => {
  return APISessionUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)), 
    error => dispatch(receiveSessionErrors(error)));
}

export const login = (user) => (dispatch) => {
  return APISessionUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    ({responseJSON}) => {dispatch(receiveSessionErrors(responseJSON))});
}

export const logout = () => (dispatch) => {
  return APISessionUtil.logout().then(
    user => dispatch(logoutCurrentUser()),
    error => dispatch(receiveSessionErrors(error)));
}

export const updateUser = (formData, user) => dispatch => {
  return APIUserUtil.updateUser(formData, currentUser).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error)));
}

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

// this one for the front-end state
const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})