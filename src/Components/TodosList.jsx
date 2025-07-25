import { useDispatch, useSelector } from "react-redux";
import { markAll, removeItem, toggleComplete } from "../App/Slices/todoSlice";
import { useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

function TodoList({ setEditId, setInpuText, editId }) {
  const todos = useSelector((state) => state.todosItem.filtredTodos);
  const dispatch = useDispatch();

  //   deleteItem
  function deleteItem(id) {
    dispatch(removeItem(id));
  }

  // function to edit item
  function editTodo(id, text) {
    setInpuText(text);
    setEditId(id);
  }

  return (
    <ul>
      <button onClick={() => dispatch(markAll())}>
        Mark All{" "}
        <FaCheckCircle
          color="green"
          size={25}
          style={{ verticalAlign: "middle" }}
        />
      </button>
      {todos.map((item) => (
        <li
          key={item.id}
          style={{
            backgroundColor: item.completed ? "green" : "red",
          }}
        >
          {item.text}{" "}
          <button onClick={() => editTodo(item.id, item.text)}>
            <MdEditSquare size={25} color="green" />
          </button>{" "}
          <button
            disabled={editId === item.id}
            onClick={() => deleteItem(item.id)}
          >
            <RiDeleteBin3Fill
              size={25}
              color={editId === item.id ? "gray" : "crimson"}
            />
          </button>
          <button onClick={() => dispatch(toggleComplete(item.id))}>
            {item.completed ? (
              <FaClock size={25} />
            ) : (
              <FaCircleCheck size={25} />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
