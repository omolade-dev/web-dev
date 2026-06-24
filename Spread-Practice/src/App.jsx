import { useState } from "react";
import Todoitem from "./components/Todoitem";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setText(newValue);
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, text];
    });

    setText("");
  }

  function deleteItem(id) {
    setItems((preview) => {
      return preview.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} value={text} type="text" />

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <Todoitem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
