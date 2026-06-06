import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = "";
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading(name);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        className="input"
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
