import { createRoot } from "react-dom/client";
import "./index.css";
import img from "./assets/IMG_8098.JPG";
import img2 from "./assets/IMG_8099.JPG";
import img3 from "./assets/IMG_8100.JPG";
import Heading from "./Heading";
import List from "./List";

createRoot(document.getElementById("root")).render(
  <div>
    <Heading />
    <List />

    <div>
      <img src={img + "?grayscale"} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  </div>,
);
