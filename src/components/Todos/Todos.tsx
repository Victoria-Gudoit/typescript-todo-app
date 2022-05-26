import React, { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosSelectors, Todo, TodosActions, FilterAction } from "../../store";
import { FILTER } from "../../store/filterSlice";

interface TodosProps {
  name: string;
}

export const Todos: React.FC<TodosProps> = ({ name }) => {
  const dispatch = useDispatch();

  const todos = useSelector<any, Todo[]>(TodosSelectors.getTodos);
  const filter = useSelector<any, FILTER>(TodosSelectors.getFilter);

  const toggleTask = (id: number) => {
    dispatch(TodosActions.toggleTodo({ id }));
  };

  const deleteTask = (id: number) => {
    dispatch(TodosActions.deleteTodo({ id }));
  };

  const changeFilter: ChangeEventHandler<HTMLInputElement> = (event: any) => { //тут я что-то не сообрзила как по-другому
    dispatch(FilterAction.toggleFilter({ value: event.target.value }));
  };

  return (
    <div>
      <div>
        <label>
          <input name='tasks' onChange={changeFilter} type="radio" value={FILTER.ALL} />
          ALL
        </label>
        <label>
          <input name='tasks' onChange={changeFilter} type="radio" value={FILTER.DONE} />
          DONE
        </label>

        <label>
          <input name='tasks' onChange={changeFilter} type="radio" value={FILTER.TODO} />
          TODO
        </label>
      </div>
      <h1>{name}, что тебе надо сделать:</h1>
      <ul>
        {filter === FILTER.DONE &&
          todos
            .filter(({ isDone }) => isDone === true)
            .map(({ id, label, isDone }) => (
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
      <ul>
        {filter === FILTER.TODO &&
          todos
            .filter(({ isDone }) => isDone === false)
            .map(({ id, label, isDone }) => (
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
      <ul>
        {filter === FILTER.ALL &&
          todos.map(({ id, label, isDone }) => (
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
