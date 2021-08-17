import React from "react";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import TodoListItem from "./TodolistItem";

const TodoList = ({ todos = [{ text: "hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
