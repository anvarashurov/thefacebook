import sessionReducer from './session_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  session: sessionReducer
})

export default rootReducer;