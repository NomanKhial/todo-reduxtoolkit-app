import { useDispatch } from "react-redux";
import { addItem, editItem } from "../App/Slices/todoSlice";
import { useSelector } from "react-redux";

function InputBox({ inputText, setInpuText, editId, setEditId }) {
  const todos = useSelector((state) => state.todosItem);
  const dispatch = useDispatch();

  // handleAddItem
  function handleAddItem() {
    if (editId) {
      dispatch(editItem({ id: editId, text: inputText }));
      setInpuText("");
      setEditId(null);
      return;
    }
    // add logic
    if (inputText) {
      dispatch(addItem(inputText));
      setInpuText("");
      return;
    }

    alert("enter to add ");
  }

  return (
    <div className="inputBox">
      <input
        type="text"
        value={inputText}
        onChange={(evt) => setInpuText(evt.target.value)}
      />
      <button className="btn" onClick={handleAddItem}>
        {editId ? "Done" : "Add Item"}
      </button>
    </div>
  );
}

export default InputBox;
