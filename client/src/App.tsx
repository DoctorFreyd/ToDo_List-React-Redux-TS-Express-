import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
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
