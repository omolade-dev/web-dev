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
      {/* <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🙏
          </span>
          <span className="header">Person With Folded Hands</span>
        </dt>
        <dd className="text">
          Two hands pressed together. Is currently very introverted, saying a
          prayer, or hoping for enlightenment. Is also used as a “high five” or
          to say thank you.
        </dd>
      </div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🤣
          </span>
          <span className="header">Rolling On The Floor, Laughing</span>
        </dt>
        <dd className="text">
          This is funny! A smiley face, rolling on the floor, laughing. The face
          is laughing boundlessly. The emoji version of “rofl“. Stands for
          „rolling on the floor, laughing“.
        </dd>
      </div> */}
    </div>
  );
}

export default Entry;
