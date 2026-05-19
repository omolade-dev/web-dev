import { createRoot } from "react-dom/client";
import pic13 from "./assets/pic13.jpeg";
import pic20 from "./assets/pic20.jpeg";
import pic21 from "./assets/pic21.jpeg";
import Card from "./Card";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" img={pic13} tel="+123 456 789" email="b@beyonce.com" />
    <input id="fName" />

    <Card
      name="Jack Bauer"
      img={pic20}
      tel=">+987 654 321"
      email="jack@nowhere.com"
    />
    <input id="fName" />

    <Card
      name="Chuck Norris"
      img={pic21}
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
    <input id="fName" />
  </div>,
);
