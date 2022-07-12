import { Todo } from "./slice";
import { Store } from "./store";
import { FILTER } from "./filterSlice";

export const filterTasks = (filter: FILTER, task: Todo): boolean => {
    if (filter === FILTER.ALL) {
      return true;
    }
  
    if (filter === FILTER.DONE) {
      return task.isDone;
    }
  
    return !task.isDone;
  };

export const getTasksOriginal  = (state: Store): Todo[] => state.todos;

export const getFilter= (state: Store) => state.filter;


export const getTasks = (state: Store) => {
    const tasks = getTasksOriginal (state);
    const filter = getFilter(state);
  
    return tasks.filter((task) => filterTasks(filter, task));
  };
  