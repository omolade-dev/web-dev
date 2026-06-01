import Input from "./Input";

function Form(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isRegistered === false ? (
          <Input type="confirmpassword" placeholder="Confirm Password" />
        ) : null}

        <button className="btn" type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Form;
