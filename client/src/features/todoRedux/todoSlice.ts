import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todo";
import { v4 as uuidv } from "uuid";
// import { getTodos, addTodo, updateTodo, deleteTodo } from "./todoAPI";

interface DataType {
  todos: TodoState["todos"];
  loading: boolean;
  error: string | null;
  // counter: number;
}

const initialState: DataType = {
  todos: [],
  loading: false,
  error: null,
  // counter: 0,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // incriment: (state) => {
    //   state.counter++;
    // },
    // decrement: (state) => {
    //   state.counter--;
    // },
    // clear: (state) => {
    //   state.counter = 0;
    // },
  },
  extraReducers: (builder) => {
    // // Getting All Todo-List
    // builder
    //   .addCase(getTodos.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getTodos.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.todos = action.payload;
    //   })
    //   .addCase(getTodos.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message ?? "Failed to load todos";
    //   });
    // // Adding a new List
    // builder.addCase(addTodo.fulfilled, (state, action) => {
    //   state.todos.push(action.payload);
    // });
    // // Updating the list
    // builder.addCase(updateTodo.fulfilled, (state, action) => {
    //   const index = state.todos.findIndex((t) => t.id === action.payload.id);
    //   if (index !== -1) {
    //     state.todos[index] = action.payload;
    //   }
    // });
    // // Deleting the list
    // builder.addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.todos = state.todos.filter((t) => t.id !== action.payload);
    // });
  },
});

// export const { incriment, decrement, clear } = todoSlice.actions;
export default todoSlice.reducer;
