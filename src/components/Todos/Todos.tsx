import React, { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosSelectors, Todo, TodosActions, FilterAction } from "../../store";
import { FILTER } from "../../store/filterSlice";
import { CheckboxGroup } from "../Checkbox";

interface TodosProps {
  name: string;
}

export const Todos: React.FC<TodosProps> = ({ name }) => {
  const dispatch = useDispatch();

  const todos = useSelector<any, Todo[]>(TodosSelectors.getTasks);
  const filter = useSelector<any, FILTER>(TodosSelectors.getFilter);

  const toggleTask = (id: number) => {
    dispatch(TodosActions.toggleTodo({ id }));
  };

  const deleteTask = (id: number) => {
    dispatch(TodosActions.deleteTodo({ id }));
  };

  const changeFilter: ChangeEventHandler<HTMLInputElement> = (event: any) => {//тут я что-то не сообрзила как по-другому
    dispatch(FilterAction.toggleFilter({ value: event.target.value }));
  };

  return (
    <div>
      <div>
        <CheckboxGroup
          options={(Object.keys(FILTER) as (keyof typeof FILTER)[]).map(
            (key) => {
              return key;
            }
          )}
          value={filter}
          onChange={changeFilter}
        />
      </div>
      <h1>{name}, что тебе надо сделать:</h1>
      <ul>
        {todos.map(({ id, label, isDone }) => (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => toggleTask(id)}
              />
              {label}
              <button onClick={deleteTask.bind(null, id)}>Удалить</button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
