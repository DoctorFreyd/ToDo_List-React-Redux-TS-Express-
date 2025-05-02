import { Optional } from 'sequelize';
export interface ITodo {
  readonly id: string;
  title: string;
  text: string;
  completed: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

export let todos: ITodo[] = [];
export type TodoCreationAttributes = Optional<
  ITodo,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateTodoData = Partial<Omit<ITodo, 'id'>>;
