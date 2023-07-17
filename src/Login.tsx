import { useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const successMessage = "Logged in successfully!";
  const errorMessage = "Invalid credentials!";

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "password") {
      setMessage(successMessage);
      navigate("/home");
    } else {
      setMessage(errorMessage);
    }
  };

  return (
    <div className="login-form">
      <h1>Login Page</h1>
      <div
        className={
          message === successMessage ? "success-message" : "error-message"
        }
      >
        {message}
      </div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button name="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
