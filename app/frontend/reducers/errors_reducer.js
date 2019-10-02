// keep track of any errors messages

// This file will be responsible for combining our reducers that handle errors.

import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;

/*
Remember, the combineReducers function accepts a single argument: an object whose properties will represent properties of our application state, and values that correspond to domain-specific reducing functions.
*/
