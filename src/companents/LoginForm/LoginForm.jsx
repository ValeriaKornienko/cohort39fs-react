import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm (){
    const EmailField = {
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        label: "Email",
    };

    const PasswordField = {
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Passsword",
    };

    const LoginButton = {
        name: "Login",
        type: "submit",
    };

    return <form className="login-form">
        <h1>Login form</h1>
        <Input inputData={EmailField} />
        <Input inputData={PasswordField}/>
        <Button name={LoginButton.name} type={LoginButton.type}/></form>

}

export default LoginForm;