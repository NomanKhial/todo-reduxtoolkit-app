import { useState } from "react";
import InputBox from "./Components/InputBox";
import TodoList from "./Components/TodosList";
import "./App.css";
import { useDispatch } from "react-redux";
import { filterOnSearch } from "./App/Slices/todoSlice";
function App() {
  const [inputText, setInpuText] = useState("");
  const [editId, setEditId] = useState(null);
  const [searcText, setSeachText] = useState("");
  const dispatch = useDispatch();

  function handleSearch(evt) {
    const val = setSeachText(evt.target.value);
    dispatch(filterOnSearch(evt.target.value));
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        value={searcText}
        onChange={handleSearch}
      />
      <InputBox
        setEditId={setEditId}
        inputText={inputText}
        setInpuText={setInpuText}
        editId={editId}
      />
      <TodoList
        editId={editId}
        setEditId={setEditId}
        setInpuText={setInpuText}
      />
    </div>
  );
}

export default App;
