export interface ITodo {
  readonly id: string;
  title?: string;
  text?: string;
  completed?: boolean;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
}

export type CreateTodoData = Partial<Omit<ITodo, "id">>;
export type UpdateTodoData = Partial<Omit<ITodo, "id">>;
