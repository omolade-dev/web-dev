function Entry(props) {
  return (
    <div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span className="header">{props.name}</span>
        </dt>
        <dd className="text">{props.description}</dd>
      </div>
    </div>
  );
}

export default Entry;
