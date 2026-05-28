import { createRoot } from "react-dom/client";
import App from "./App";

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x * x;
});

console.log(newNumbers);

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>,
);
