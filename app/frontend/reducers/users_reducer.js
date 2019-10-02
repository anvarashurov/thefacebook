//to keep track of all of our users.
import { RECEIVE_CURRENT_USER } from "../actions/sesssion_actions";

const UsersReducer = (oldState = {}, action) => {
  // oldState is a slice of state.
  // defaultState is figured out from the State Shape...
  // What is default state?
  if (action.type === RECEIVE_CURRENT_USER) {
    return Object.assign({}, oldState, { [action.user.id]: action.user });
  } else {
    return oldState;
  }
};

export default UsersReducer;
