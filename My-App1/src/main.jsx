import { createRoot } from "react-dom/client";
import "./index.css";
import img from "./assets/IMG_8098.JPG";
import img2 from "./assets/IMG_8099.JPG";
import img3 from "./assets/IMG_8100.JPG";

const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black",
};

createRoot(document.getElementById("root")).render(
  <div>
    <h1 style={customStyle} className="heading">
      Favourite Food
    </h1>

    <ul>
      <li>Noodles</li>
      <li>Bacon</li>
      <li>Jamon</li>
    </ul>

    <div>
      <img src={img + "?grayscale"} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  </div>,
);
