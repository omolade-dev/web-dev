import "./App.css";
import emojipedia from "./component/emojipedia";
import Entry from "./component/Entry";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <Entry
        id={emojipedia[0].id}
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      />
    </div>
  );
}

export default App;
