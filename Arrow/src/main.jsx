import { createRoot } from "react-dom/client";
import App from "./App";

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x);

// const newNumbers = numbers.map( x => x * 2 )

// const newNumbers = numbers.filter(num => num < 10);

// const newNumber = numbers.reduce((accumulator, currentNumber) =>
// accumulator + currentNumber)

const newNumber = numbers.find(num => num > 10
);

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>,
);
