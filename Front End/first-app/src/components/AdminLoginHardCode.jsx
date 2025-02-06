import { useState,} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("form submitted");
    if (username === "admin1" && password === "goodman123") {
      navigate("/page2");
    }
    if (username === "admin2" && password === "braveheart54") {
      navigate("/page2");
    }
    if (username === "admin3" && password === "loverperson22") {
      navigate("/page2");
    } else {
      setMessage("Login failed, check your username and password");
    }

  };
  return (
    <div class="bidForm">
      <h2>Enter Login Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label form="exampleFormControlInput1" className="form-label">
            Username:
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Please Enter Admin Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <p />
        </div>
        <div className="mb-3">
          <label form="exampleFormControlInput1" className="form-label">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Please Enter Admin Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <p />
      <b>{message}</b>
    </div>
  );
};

export default Login;