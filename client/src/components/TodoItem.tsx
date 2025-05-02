import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  deleteTodo,
  getTodos,
  updateTodo,
} from "../features/todoRedux/todoAPI";
import toast from "react-hot-toast";
// import { ITodo } from "../types/todo";

const TodoItem: React.FC = () => {
  // Varibales
  const todosinfo = useAppSelector((state) => state.todos);
  // const [todo, setTodo] = useState<ITodo[]>([]);
  const dispatch = useAppDispatch();
  // Functions
  // Get All Todos
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  // Screen
  return (
    <div className="bg-dark">
      <h1 className="text-center text-light">ToDo Item</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                All <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Done
              </a>
            </li>
            <li className="nav-item dropdown">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Items Quantity</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0 d-flex ms-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
      {todosinfo.loading && <p className="text-center text-info">Loading...</p>}
      {todosinfo.error && (
        <p className="text-center text-danger"> Error: {todosinfo.error}</p>
      )}
      <div className="d-flex flex-wrap justify-content-around">
        {todosinfo.todo.map((item) => (
          <div
            className={
              item.completed
                ? "card text-white bg-success mb-3"
                : "card text-white bg-info mb-3"
            }
            style={{ maxWidth: "18rem" }}
            key={item.id}
          >
            <div className="card-header">{item.title}</div>
            <div className="card-body">
              <p className="card-text">{item.text}</p>
              <div className="d-flex">
                <div
                  className="checkbox-wrapper-11"
                  onClick={async () => {
                    await dispatch(
                      updateTodo({
                        id: item.id,
                        completed: item.completed,
                        text: undefined,
                        title: undefined,
                      })
                    );
                  }}
                >
                  <input id={item.id} type="checkbox" name="r" value="2" />
                  <label htmlFor={item.id}>
                    {item.completed ? "Done" : "To-Do"}
                  </label>
                </div>
                <button className="btn btn-warning m-1">
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="btn btn-danger m-1"
                  // Delete The Todo
                  onClick={async () => {
                    await dispatch(deleteTodo(item.id));
                    toast.success("List is Deleted!", { icon: "🔥" });
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-footer">
              <p>
                Time:<span> </span>
                {item.updatedAt
                  ? new Date(item.updatedAt).toLocaleString()
                  : "No Data"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
