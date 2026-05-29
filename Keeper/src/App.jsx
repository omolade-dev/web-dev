import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesItem) => (
        <Note
          key={notesItem.key}
          title={notesItem.title}
          content={notesItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
