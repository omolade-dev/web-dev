import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    event.preventDefault();
    setHeading(name);
  }

  function handleMouseOver() {
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onClick={handleClick}>
        <input
          onChange={handleChange}
          className="input"
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
