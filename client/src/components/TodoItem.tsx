import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getTodos } from "../features/todoRedux/todoAPI";

const TodoItem: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  console.log("item todo page todos.todo: ", todos.loading);
  return (
    <div className="bg-dark">
      <h1 className="text-center text-light">ToDo Item</h1>
      {todos.loading && <p className="text-center text-info">Loading...</p>}
      {todos.error && (
        <p className="text-center text-danger"> Error: {todos.error}</p>
      )}
      <ul>
        {todos.todo.map((item) => (
          <li key={item.id} className="w-25">
            <h4 className="text-center text-info">{item.title}</h4>
            <p className="text-center text-primary">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
