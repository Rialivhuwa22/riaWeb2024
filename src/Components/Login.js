import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if both username and password are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      // Set state to display the welcome message
      setShowWelcomeMessage(true);

      // Call the onLogin function passed from the parent component
      onLogin({ username, password });

      // Redirect to the home page using React Router's navigate
      navigate("/");
    } else {
      // Display an alert if either username or password is empty
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
     <div className="login-description">
     <p><b>Please login if you have already registered your account</b></p>
      {/* Input fields for username and password */}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {/* Button to trigger the login functionality */}
      <button onClick={handleLogin}>Login</button>

      {/* Display welcome message if showWelcomeMessage state is true */}
      {showWelcomeMessage && <p>Welcome, {username}!</p>}
      </div> 
    </div>
  );
};

export default Login;

