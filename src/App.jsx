import React from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List </h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}
