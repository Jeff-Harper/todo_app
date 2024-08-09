import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, i) => {
        return (
          <TodoCard key={i} index={i} {...props}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
