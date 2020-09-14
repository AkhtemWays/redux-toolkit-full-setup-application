import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  addTodo,
  removeTodo,
} from "../src/store/toolkitSlice";

export default function Content() {
  const count = useSelector((state) => state.main.count);
  const todos = useSelector((state) => state.main.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addTodo(todo))}>Add todo</button>
      <button onClick={() => dispatch(removeTodo())}>Remove todo</button>
      <input
        type="text"
        value={todo}
        onChange={(ev) => {
          setTodo(ev.target.value);
        }}
      />
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
}
