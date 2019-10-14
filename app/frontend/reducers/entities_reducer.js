import { combineReducers } from "redux";
import usersReducers from "./users_reducer";
import postsReducers from "./posts_reducer";
import commentsReducers from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducers,
  posts: postsReducers,
  comments: commentsReducers,
});

export default entitiesReducer;