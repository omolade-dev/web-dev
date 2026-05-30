import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="confirmpassword" placeholder="Confrim Password" />
        <Button />
      </form>
    </div>
  );
}

export default Form;
