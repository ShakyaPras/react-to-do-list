import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TodoList from "./todos/Todolist";

const App = () => (
  <div className="App">
    <h1>Your custom To-do List WebApp</h1>
    <TodoList />
  </div>
);

export default hot(module)(App);
