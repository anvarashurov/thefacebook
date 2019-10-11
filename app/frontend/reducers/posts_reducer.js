//to keep track of all of our users.
import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/session_actions";
import { merge } from 'lodash';

const PostsReducer = (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return merge({}, oldState, {[action.post.id]: action.post});
        case REMOVE_POST: 
            let newState = oldState;
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
};

export default PostsReducer;
