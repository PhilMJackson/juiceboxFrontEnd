import React from "react";
import { fetchUserToken } from "../api/users";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
  setToken,
}) => {
  return (
    <div>
      <h1>Welcome Back</h1>
      {/* The form below is the form that verifies login credentials */}
      <div className="form-container">
        <form
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetchUserToken(username, password);
              setToken(response);
              setIsLoggedIn(true);
            } catch (error) {
              console.error(
                "There was a problem with your login information.",
                error
              );
            }
          }}
        >
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
      {/* the below section only displays after a successful user login */}
      <div
        className="login-confirmation"
        style={{
          display: isLoggedIn ? "block" : "none",
        }}
      >
        <h3>LOGIN SUCCESS!</h3>
      </div>
    </div>
  );
};

export default Login;

// fetchUserToken: get request
//
