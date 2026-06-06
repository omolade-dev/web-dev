import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="container">
      <h1>{Hello}</h1>
      <input className="input" type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
