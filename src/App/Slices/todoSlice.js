import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    allTodos: [],
    filtredTodos: [],
  },

  // reducers
  reducers: {
    // add item
    addItem: (state, action) => {
      const todo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      };

      state.allTodos.push(todo);
      state.filtredTodos.push(todo);
    },

    // remove item
    removeItem: (state, action) => {
      const itemToBeDeleted = state.filtredTodos.findIndex(
        (item) => item.id === action.payload
      );

      state.filtredTodos.splice(itemToBeDeleted, 1);
    },

    // edit item
    editItem: (state, action) => {
      const { id, text } = action.payload;
      const todoToBeEdited = state.filtredTodos.find((todo) => todo.id === id);
      if (todoToBeEdited) todoToBeEdited.text = text;
    },

    filterOnSearch: (state, action) => {
      state.filtredTodos = state.allTodos.filter((todo) =>
        todo.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    // toggle complete state
    toggleComplete: (state, action) => {
      state.filtredTodos = state.filtredTodos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },

    // mark all as completed
    markAll: (state, actiion) => {
      state.filtredTodos = state.allTodos.map((todo) => ({
        ...todo,
        completed: true,
      }));
    },
  },
});

export default todoSlice;

export const {
  addItem,
  removeItem,
  editItem,
  filterOnSearch,
  toggleComplete,
  markAll,
} = todoSlice.actions;
