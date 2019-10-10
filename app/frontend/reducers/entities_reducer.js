import { combineReducers } from "redux";
import usersReducers from "./users_reducer";
import postsReducers from "./posts_reducer";

const entitiesReducer = combineReducers({
  users: usersReducers,
  posts: postsReducers,
});

export default entitiesReducer;