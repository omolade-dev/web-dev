function Button(props) {
  return (
    <div>
      <button className="btn" type="submit">
        {props.btn}
      </button>
    </div>
  );
}

export default Button;
