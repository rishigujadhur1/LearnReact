import Account from "../../app/api/agent";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    let userAccount = {
      username: username.value,
      password: password.value,
    };
    debugger;
    Account.login(userAccount);
  };

  return (
    <div className="my-5">
      <h1 className="text-light">Login</h1>
      <Form>
        <Form.Control id="username" placeholder="Username" className="my-2" />
        <Form.Control
          id="password"
          placeholder="Password"
          type="password"
          className="my-2"
        />
        <Button onClick={handleSubmit} className="my-2">
          Login
        </Button>
      </Form>
    </div>
  );
}
