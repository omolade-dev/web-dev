import { createRoot } from "react-dom/client";

const name = "Omolade Ajala";
const date = new Date();
const currentYear = date.getFullYear();

createRoot(document.getElementById("root")).render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
);
