import "./App.css";
import Entry from "./components/Entry";
import emojipedia from "./components/Emojipedia";

function createEntry(emojiTerm) {
  return (
    <div>
      <Entry
        id={emojiTerm.id}
        key={emojiTerm.id}
        name={emojiTerm.name}
        emoji={emojiTerm.emoji}
        description={emojiTerm.meaning}
      />
      ;
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
