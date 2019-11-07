//to keep track of all of our users.
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_ALL_USERS } from "../actions/user_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import {merge} from 'lodash';

// lodash wrapper error

const UsersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_POST:
      oldState[action.post.authorId].authoredPostIds.push(action.post.id);
      return oldState;
      // return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_COMMENT:
      // debugger
      oldState[action.comment.authorId].authoredCommentIds.push(action.comment.id);
      return oldState;
    default:
      return oldState;
  }
};

export default UsersReducer;