import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todo";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./todoAPI";

interface DataType {
  todo: TodoState["todos"];
  loading: boolean;
  error: string | null;
}

const initialState: DataType = {
  todo: [],
  loading: false,
  error: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Getting All Todo-List
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todo = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load todos";
      });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todo.push(action.payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todo = state.todo.filter((t) => t.id !== action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.todo.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todo[index] = action.payload;
      }
    });
  },
});

export default todoSlice.reducer;
