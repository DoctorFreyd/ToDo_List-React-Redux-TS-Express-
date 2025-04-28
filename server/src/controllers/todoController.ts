import { Request, Response, NextFunction } from 'express';
import {
  createList,
  deleteTheList,
  getAllTodos,
  updateTheList,
} from '../service/todoService';

// Create Todo-List
export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, text } = req.body;
    const newTodo = await createList(title, text);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};
// Read all todos
export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};
// Update the List
export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id, ...data } = req.body;
    const updated = await updateTheList(id, data);
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};
// Delete the List
export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const list = await deleteTheList(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
