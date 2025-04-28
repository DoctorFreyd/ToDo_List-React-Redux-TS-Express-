import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITodo } from "../types/todo";
import toast, { Toaster } from "react-hot-toast";
//
const TodoForm: React.FC = () => {
  // Varibales
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
    watch,
  } = useForm<ITodo>();
  const title = watch("title");
  const text = watch("text");
  const [customTouched, setCustomTouched] = useState<{
    title: boolean;
    text: boolean;
  }>({
    title: false,
    text: false,
  });
  // Functions
  const handleClear = () => {
    reset();
    console.log("cleaned");
  };
  useEffect(() => {
    if (title && !customTouched.title) {
      setCustomTouched((e) => ({ ...e, title: true }));
    }
    if (text && !customTouched.text) {
      setCustomTouched((e) => ({ ...e, text: true }));
    }
  }, [title, text]);
  const getShadowColor = (field: "title" | "text") => {
    const value = field === "title" ? title : text;
    const isTouched = customTouched[field];
    const hasError = errors[field];
    if (hasError) {
      return {
        borderColor: "rgba(220, 53, 69, 0.8)",
        boxShadow:
          "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(220, 53, 69, 0.6)",
      };
    }
    if (isTouched && value) {
      return {
        borderColor: "rgba(126, 239, 104, 0.8)",
        boxShadow:
          "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)",
      };
    }
  };
  const handleClickForm = (obj: ITodo) => {
    let data = obj;
    console.log(data);
    reset();
    toast.success("Successfully Completed");
  };
  // useEffect(() => {});
  // Screen
  return (
    <div className="w-100 d-flex justify-content-center bg-secondary p-4">
      <form className="w-75" onSubmit={handleSubmit(handleClickForm)}>
        <h1 className="text-center text-light">ToDo Form</h1>
        {/* <!-- Title --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            style={getShadowColor("title")}
            className="form-control"
            {...register("title", {
              required: "Write title of your ToDo-List",
              pattern: {
                value: /^[\p{L}\p{N} ]*$/u,
                message: "Must be letters and numbers",
              },
              maxLength: {
                value: 30,
                message: "Must not exceed 30 characters",
              },
            })}
            onChange={(e) => {
              setValue("title", e.target.value);
              trigger("title");
            }}
          />
          {errors.title && (
            <div className="text-xl alert alert-danger">
              <p className="tm">{errors.title?.message}</p>
            </div>
          )}
        </div>
        {/* <!-- Text --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="text">
            Text
          </label>
          <textarea
            className="form-control"
            id="text"
            style={getShadowColor("text")}
            {...register("text", {
              required: "Write text for your ToDo-List",
              pattern: {
                value: /^[\p{L}\p{N} `~!@#$%^&*()\-_=+/.<>?:;'"[\]{}\\||]*$/u,
                message: "you cant sent emoji or somthing either",
              },
              maxLength: {
                value: 300,
                message: "Must not exceed 300 characters",
              },
            })}
            onChange={(e) => {
              setValue("text", e.target.value);
              trigger("text");
            }}
            rows={4}
          />
          {errors.text && (
            <p className="text-lg alert alert-danger">{errors.text?.message}</p>
          )}
        </div>
        {/* <!-- Submit button --> */}
        <div>
          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
            Save
          </button>
          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-warning btn-block mb-4 ms-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div
          className="toast align-items-center"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex bg-dark">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button
              type="button"
              className="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default TodoForm;
