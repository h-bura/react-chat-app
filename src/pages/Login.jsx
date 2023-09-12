import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">User Login</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address </label>
          <input type="email" placeholder="Email" id="email" />
          <label htmlFor="password">Password </label>
          <input type="password" placeholder="Password" id="password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <button>LOG IN</button>
          {err && <span className="error">Something went wrong</span>}
        </form>
        <p>
          Don't have an account?
          <Link to="/register" className="link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
