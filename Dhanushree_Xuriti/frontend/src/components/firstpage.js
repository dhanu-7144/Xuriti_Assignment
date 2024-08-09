import React, { useState } from "react";
import "./style.css"
import SignInForm from "./signin";
import SignUpForm from "./signup";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const navigate=useNavigate();

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <h1>WELCOME TO XURITI</h1>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your credentials.
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your credentials and start journey with us</p>
              
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Register
              </button>

              <button
                className="ghost "
                id="signUp"
                onClick={() =>navigate("/Userslist")}
              >
                List Users
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}