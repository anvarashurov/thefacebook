import sessionReducer from './session_reducer';
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import ui from './ui_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: ui,
  errors: errorsReducer,
})

// later we add likes, comments, friends, posts, etc

export default rootReducer;