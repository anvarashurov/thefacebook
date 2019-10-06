import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

// const defaultState = {
//   session: []
// };

const sessionErrorsReducer = (errorState = [], action) => {
  Object.freeze(errorState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: {
      return action.errors;
    }
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return errorState;
  }
};

// this reducer's return value is pointed to by key 'session' inside our errors slice of state.

export default sessionErrorsReducer;