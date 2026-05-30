import Input from "./Input";
import Button from "./Button";

function Register(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="confirmpassword" placeholder="Confirm Password" />
        <Button
           btn="Register"
          isRegistered={props.isRegistered ? "Login" : "Register"}
        />
      </form>
    </div>
  );
}

export default Register;
