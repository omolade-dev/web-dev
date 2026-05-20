import Card from "./components/Card";
import pic17 from "./assets/pic17.jpeg";
import "./index.css";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Beyouce"
        tel="+123 456 789"
        email="b@beyonce.com"
        img={pic17}
      />
    </div>
  );
}

export default App;
