import { useState } from "react";
import "./App.css";
import InputBox from "./Components/InputBox";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [editMode, setEditMode] = useState(null);

  return (
    <>
      <div>
        <InputBox
          inputText={inputText}
          setInputText={setInputText}
          editMode={editMode}
          setEditMode={setEditMode}
        />
        <TodoList
          setEditMode={setEditMode}
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
    </>
  );
}

export default App;
