import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const fetchAllUsers = () => dispatch => {
    return APIUtil.fetchAllUsers().then(
        users => dispatch(fetchAllUsers(users)))}

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})