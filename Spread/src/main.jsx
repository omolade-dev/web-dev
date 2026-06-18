import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>,
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName,
  id: 1,
  username: "Jamesbrown",
};

console.log(user);
