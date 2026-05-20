import Avater from ".//Avater";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avater img={props.img} />
        </div>
        <div className="bottom">
          <Detail tel={props.tel} email={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
