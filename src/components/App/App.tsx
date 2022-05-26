import React, { useState } from "react";
import { Todos } from "../Todos/Todos";
import { TodosActions } from "../../store";
import { useDispatch } from "react-redux";

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
    <div>
      <input value={label} type="text" onChange={inputHandler} />
      <button onClick={addTodo}>Добавить задачу</button>
      <Todos name="Jan" />
    </div>
  );
};
