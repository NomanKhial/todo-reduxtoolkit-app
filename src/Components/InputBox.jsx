import { useDispatch } from "react-redux";
import { addItem, editItem } from "../App/Slices/todoSlice.js";

function InputBox({
  inputText: text,
  setInputText,
  editMode: id,
  setEditMode,
}) {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (id != null) {
      dispatch(editItem({ id, text }));
      setid(null);
      setInputText("");
      return;
    }

    if (text.trim()) {
      dispatch(addItem(text));
      settext("");
    } else {
      alert("Please enter a todo item!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(evt) => setInputText(evt.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddItem}>
        {id != null ? "Edit Item" : "Add Item"}
      </button>
    </div>
  );
}

export default InputBox;
