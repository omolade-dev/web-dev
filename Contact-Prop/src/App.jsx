import Card from "./components/Card";
import "./index.css";
import contacts from "./components/Contact";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
        img={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
        img={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
        img={contacts[2].imgURL}
      /> */}
    </div>
  );
}

export default App;
