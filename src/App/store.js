import { configureStore } from "@reduxjs/toolkit";
import todos from "./Slices/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
