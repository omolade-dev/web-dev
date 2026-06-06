import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>

      <form action="">
        <input
          name="fName"
          type="text"
          placeholder="First Name"
          value={fName}
          onChange={updateFName}
        />

        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={updateLName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
