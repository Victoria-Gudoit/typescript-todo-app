import React, { useState } from "react";
import { Todos } from "../Todos/Todos";
import { TodosActions } from "../../store";
import { useDispatch } from "react-redux";
import css from "./app.module.css"

export const App: React.FC = () => {
  const [label, setLabel] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const addTodo = () => {
    dispatch(TodosActions.addTodo({ todo: { label, isDone: false } }));
    setLabel("");
  };

  return (
    <div className={css.wrapper}>
              <h1 className={css.title}>My todo</h1>
      <input className={css.input} value={label} type="text" onChange={inputHandler} />
      <button className={css.btn} onClick={addTodo}>Добавить задачу</button>
      <Todos name="Jan" />
    </div>
  );
};
