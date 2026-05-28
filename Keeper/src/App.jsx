import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />

      <Note title="This is a title." content="This is a content." />
      <Footer />
    </div>
  );
}

export default App;
