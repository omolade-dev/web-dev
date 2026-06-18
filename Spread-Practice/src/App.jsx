import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;

    setText(newValue);
  }

  function updateText() {
    const {};
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} value={text} type="text" />

        <button onClick={updateText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
