import Todo from '../models/todoModel';
import { ITodo, UpdateTodoData } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

// Create Todo List
export const createList = async (title: string, text: string) => {
  const newTodo: ITodo = {
    id: uuidv4(),
    title,
    text,
    completed: false,
  };
  const list = await Todo.create({ newTodo });
};
// Get All Todo Lists
export const getAllTodos = async () => {
  const todos = await Todo.findAll();
  return todos;
};
// Get By Completed
// Update Todo List
export const updateTheList = async (id: string, data: UpdateTodoData) => {
  const updateData: UpdateTodoData = {};

  if (data.title !== undefined) updateData.title = data.title;
  if (data.text !== undefined) updateData.text = data.text;
  if (data.completed !== undefined) updateData.completed = data.completed;

  if (Object.keys(updateData).length === 0) {
    throw new Error('There no any changes!');
  }

  const list = await Todo.update(updateData, {
    where: { id },
  });
};
// Delete Todo List
export const deleteTheList = async (tId: string) => {
  const list = await Todo.destroy({
    where: {
      id: tId,
    },
  });
};
