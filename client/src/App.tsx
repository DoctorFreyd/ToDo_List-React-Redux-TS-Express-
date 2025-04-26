import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./components/Todo_form";
import TodoItem from "./components/Todo_item";

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
