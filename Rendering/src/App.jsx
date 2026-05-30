import Register from "/components/Register";
// import Login from "/components/Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {" "}
      <Register isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
