import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo, CreateTodoData, UpdateTodoData } from "../../types/todo";
const todoURL: string = import.meta.env.VITE_TODO_BACKEND_URL;

// Get The All Todos
export const getTodos = createAsyncThunk("todos/get", async () => {
  const { data } = await axios.get(`${todoURL}`);
  return data as ITodo[];
});
// Create The List
export const createTodo = createAsyncThunk(
  "todos/create",
  async ({ title, text }: CreateTodoData) => {
    const response = await axios.post(`${todoURL}`, {
      title: title,
      text: text,
    });
    return response.data as ITodo;
  }
);
// Update The List
export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({
    id,
    title,
    text,
    completed,
  }: {
    id: string;
    title: string | undefined;
    text: string | undefined;
    completed: boolean | undefined;
  }) => {
    const sendData: UpdateTodoData = {};
    if (title !== undefined) sendData.title = title;
    if (text !== undefined) sendData.text = text;
    if (completed !== undefined) sendData.completed = completed;
    const { data } = await axios.put(`${todoURL + id}`, sendData);
    return data as ITodo;
  }
);
// Delete The List
export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id: string) => {
    const { data } = await axios.delete(`${todoURL + id}`);
    return data;
  }
);

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
