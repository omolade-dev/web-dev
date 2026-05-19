import pic17 from "./assets/pic17.jpeg";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img src={pic17} alt="" />
        </div>

        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
