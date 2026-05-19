import pic17 from "../assets/pic17.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic4 from "../assets/pic4.jpeg";

function Contact() {
  <div>
    <h1>My Contacts</h1>

    <h2>Beyonce</h2>
    <img src={pic17} alt="avatar_img" />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img src={pic2} alt="avatar_img" />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img src={pic4} alt="avatar_img" />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>;
}

export default Contact;
