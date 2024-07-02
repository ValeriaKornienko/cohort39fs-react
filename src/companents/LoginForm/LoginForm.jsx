import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  const loginUser = (event) => {
    event.preventDefault();
    console.log("user loged in succesfully");
  };

  return (
    <form className="login-form">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-input"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-input"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Button onClick={loginUser} name="Login" type="submit" />
      </div>
    </form>
  );
}

export default LoginForm;
