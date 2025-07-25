import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlice";

const store = configureStore({
  reducer: {
    todosItem: todoSlice.reducer,
  },
});

export { store };
