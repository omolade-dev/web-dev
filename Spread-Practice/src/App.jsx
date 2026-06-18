import { useState } from "react";

function App() {
  const [text, setText] = useState({
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
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
        <input
          onChange={handleChange}
          name="message"
          value={text.message}
          type="text"
        />

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
