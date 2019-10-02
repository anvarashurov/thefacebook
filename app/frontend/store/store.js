import RootReducer from "../reducers/root_reducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const configureStore = (preLoadedState = {}) =>
  createStore(RootReducer, preLoadedState, applyMiddleware(thunk, logger));

export default configureStore;
