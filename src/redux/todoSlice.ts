import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {},
    toggleTodo: (state, action: PayloadAction<string>) => {},
    deleteTodo: (state, action: PayloadAction<string>) => {},
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<string>) => {
//       state.push({ id: uuidv4(), text: action.payload, completed: false });
//     },
//     toggleTodo: (state, action: PayloadAction<string>) => {
//       const todo = state.find(t => t.id === action.payload);
//       if (todo) todo.completed = !todo.completed;
//     },
//     deleteTodo: (state, action: PayloadAction<string>) => {
//       return state.filter(t => t.id !== action.payload);
//     },
//   },
// });
