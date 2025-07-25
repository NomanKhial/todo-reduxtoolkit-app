import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../App/Slices/todoSlice";

function TodoList({ setInputText, setEditMode }) {
  const todos = useSelector((state) => state.todos);
  const disPatch = useDispatch();

  function editTodo(id, text) {
    disPatch(editItem({ id, text }));
    setInputText(text);
    setEditMode(id);
  }

  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => disPatch(deleteItem(todo.id))}>Delete</button>
          <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
