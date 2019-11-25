import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState);
            delete newState[action.commentId];
            return newState;
        case RECEIVE_LIKE:
            if (action.like.likeableType === 'Comment') {
                oldState[action.like.likeableId].likerIds.push(action.like.likerId);
                oldState[action.like.likeableId].likeIds.push(action.like.id);
                return oldState;
            } else {
                return oldState;
            }
        case REMOVE_LIKE:
            // debugger
            if(action.like.likeableType === "Comment") {
                let secondNewState = Object.assign({}, oldState);
                // debugger
                for (let i = 0; i < secondNewState[action.like.likeableId].likeIds.length; i++) {
                    // debugger
                    if (secondNewState[action.like.likeableId].likeIds[i] === action.like.id) {
                        // debugger
                        secondNewState[action.like.likeableId].likeIds.splice(i, 1);
                        // debugger
                    }
                    if (secondNewState[action.like.likeableId].likerIds[i] === action.like.likerId) {
                        // debugger
                        secondNewState[action.like.likeableId].likerIds.splice(i, 1);
                        // debugger
                    }
                }
                // debugger
                return secondNewState;
            } else {
                return oldState;
            }
        default:
            return oldState;
    }
};

export default CommentsReducer;