//to keep track of all of our users.
import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/session_actions";
import { merge } from 'lodash';

const PostsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return merge({}, oldState, {[action.post.id]: action.post});
        case REMOVE_POST: 
            let newState = Object.assign({}, oldState);
            // debugger
            delete newState[action.postId];
            // debugger
            return newState;
        default:
            return oldState;
    }
};

export default PostsReducer;
