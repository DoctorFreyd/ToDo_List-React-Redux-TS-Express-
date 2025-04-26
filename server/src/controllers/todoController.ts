import { Request, Response, NextFunction } from 'express';
import { todos, Todo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';
// Create Todo-List
export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, text } = req.body;
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      text,
      completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};
// Read all todos
export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
  } catch (error) {
    next(error);
  }
};
