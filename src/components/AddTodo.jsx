import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="AddTodos"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
          setItem("");
        }}
      >
        Add
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(loadTodo());
          }}
        >
          Load todo
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
