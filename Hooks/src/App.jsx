import { useState } from "react";

function App() {
  const [count, setCount] = useState(34223);

  function increase() {
    setCount(12);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
