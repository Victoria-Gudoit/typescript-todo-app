import { Todo } from "./slice";
import { Store } from "./store";

export const getTodos = (state: Store): Todo[] => state.todos;

export const getFilter= (state: Store) => state.filter;


