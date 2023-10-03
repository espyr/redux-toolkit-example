import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import commentReducer from "./commentSlice";
import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    comments: commentReducer,
    todos: todosReducer,
  },
});
