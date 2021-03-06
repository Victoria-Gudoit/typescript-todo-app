import React, { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosSelectors, Todo, TodosActions, FilterAction } from "../../store";
import { FILTER } from "../../store/filterSlice";
import { CheckboxGroup } from "../Checkbox";
import css from "./todos.module.css";

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

  const changeFilter: ChangeEventHandler<HTMLInputElement> = (event: any) => {
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
          onChange={changeFilter} label={""} checked={false}        />
      </div>
      <h1 className={css.name}>{name}, что тебе надо сделать:</h1>
      <ul className={css.list}>
        {todos.map(({ id, label, isDone }) => (
          <li className={css.item} key={id}>
           
              <input  className={css.checkbox}
                type="checkbox"
                checked={isDone}
                onChange={() => toggleTask(id)}
              />
              {label}
              <button className={css.btn} onClick={deleteTask.bind(null, id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
