export interface ITodo {
  readonly id: string;
  title: string;
  text: string;
  completed: boolean;
}

export let todos: ITodo[] = [];
export type UpdateTodoData = Partial<Omit<ITodo, 'id'>>;
