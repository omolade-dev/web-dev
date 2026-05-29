import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button />
      </form>
    </div>
  );
}

export default Login;
