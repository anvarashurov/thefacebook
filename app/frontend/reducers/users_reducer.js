//to keep track of all of our users.
import { RECEIVE_CURRENT_USER, RECEIVE_POST } from "../actions/session_actions";
import {merge} from 'lodash';

// lodash wrapper

const UsersReducer = (oldState = {}, action) => {
  // oldState is a slice of state.
  // defaultState is figured out from the State Shape...
  // What is default state?
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_POST:
      // debugger
      
      // newState = newState[Object.keys(newState)[0]].authoredPostIds.push(action.post.id);
      oldState[action.post.authorId].authoredPostIds.push(action.post.id);
      return oldState;
      // return merge({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

//oldState[Object.keys(oldState)[0]].authoredPostIds.push(action.post.id)

//oldState[15].authoredPostIds.push(action.post.id)




// if (action.type === RECEIVE_CURRENT_USER) {
//   // debugger
//   return merge({}, oldState, { [action.user.id]: action.user });
// } else {
//   return oldState;
// }


export default UsersReducer;
