import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  return (
    <>
      <div className="text-center text-info bg-dark">To Do List</div>
      <TodoForm />
      <TodoItem />
    </>
  );
};

export default App;
