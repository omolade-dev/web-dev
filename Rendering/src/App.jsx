import Form from "/components/Form";
import Login from "./components/Login";

var userIsRegistered = false;

function App() {
  return <div className="container">{userIsRegistered ? Form : Login}</div>;
}

export default App;
