import "./App.css";
import emojipedia from "./component/emojipedia";
import Entry from "./component/Entry";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry
          emoji="💪"
          name="Tense Biceps"
          description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also
          used in connection with doing sports, e.g. at the gym."
        />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
