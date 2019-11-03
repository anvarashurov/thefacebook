import * as FriendAPIUtil from '../util/friend_api_util';
import { receiveCurrentUser } from './session_actions';

export const createFriendRequest = (senderId, receiverId) => dispatch => {
    debugger
    return FriendAPIUtil.createFriendRequest(senderId, receiverId).then(user => {
        return dispatch(receiveCurrentUser(user));
    });
};