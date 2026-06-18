import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} value={text} type="text" />

        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>
            {items.map((todoitem) => (
              <li>{todoitem}</li>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
