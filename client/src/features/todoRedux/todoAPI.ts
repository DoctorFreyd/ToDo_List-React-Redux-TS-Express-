import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo } from "../../types/todo";
const todoURL: string = import.meta.env.VITE_TODO_BACKEND_URL;

// Get The All Todos
export const getTodos = createAsyncThunk("todos/getTodo", async () => {
  const { data } = await axios.get(`${todoURL}`);
  console.log("todoApi: ", data);
  return data as ITodo[];
});

// // Get The List
// export const getTodos = createAsyncThunk("todos/getAll", async () => {
//   const { data } = await axios.get("https://dummyjson.com/todos");
//   return data.todos as Todo[];
// });

// // Add The List
// export const addTodo = createAsyncThunk("todos/add", async (text: string) => {
//   const { data } = await axios.post("https://dummyjson.com/todos/add", {
//     todo: text,
//     completed: false,
//     userId: 1,
//   });
//   return data as Todo;
// });

// // Update The List
// export const updateTodo = createAsyncThunk(
//   "todos/update",
//   async ({ id, updatedTodo }: { id: string; updatedTodo: Partial<Todo> }) => {
//     const { data } = await axios.put(
//       `https://dummyjson.com/todos/${id}`,
//       updatedTodo
//     );
//     return data as Todo;
//   }
// );

// // Delete the List
// export const deleteTodo = createAsyncThunk(
//   "todos/delete",
//   async (id: string) => {
//     await axios.delete(`https://dummyjson.com/todos/${id}`);
//     return id;
//   }
// );
