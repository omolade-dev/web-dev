import img1 from "./assets/pic21.jpeg";
import img2 from "./assets/pic20.jpeg";
import img3 from "./assets/pic13.jpeg";

function App() {
  <div>
    <h1>My Contacts</h1>

    <h2>Beyonce</h2>
    <img src={img1} alt="avatar_img" />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img src={img2} alt="avatar_img" />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img src={img3} alt="avatar_img" />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>;
}

export default App;
