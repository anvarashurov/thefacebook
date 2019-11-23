import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import { merge } from 'lodash';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
             
            return action.likes;
        case RECEIVE_LIKE:
            return merge({}, oldState, { [action.type.id]: action.like });
        case REMOVE_LIKE:
            debugger
            let newState = merge({}, oldState);
            delete newState[action.like.likeId];
            return newState;
        default:
            return oldState;
    }
}

export default likesReducer;