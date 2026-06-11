import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    if (inputName === "fName") {
      setFullName({ fName: newValue });
    } else if (inputName == "lName") {
      setFullName({ lName: newValue });
    }
  }

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
          // value={fullName.fName}
          onChange={handleChange}
        />

        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          // value={fullName.lName}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
