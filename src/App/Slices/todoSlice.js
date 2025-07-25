import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // add item to list object
    addItem: (state, action) => {
      const todoObject = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      };

      state.push(todoObject);
    },

    // delete item
    deleteItem: (state, action) => {
      const index = state.find((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },

    editItem: (state, action) => {
      const { text, id } = action.payload;
      const todoItem = state.find((todo) => todo.id === id);
      if (todoItem) todoItem.text = text;
    },
  },
});

export const { addItem, deleteItem, editItem } = todos.actions; // Exporting the action
export default todos;
