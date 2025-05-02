import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { Toaster } from "react-hot-toast";
const App: React.FC = () => {
  return (
    <>
      <div className="text-center text-info bg-dark">To Do List</div>
      <TodoForm />
      <TodoItem />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
