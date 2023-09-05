import React from "react";
function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Log in</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <button>Log in</button>
        </form>
        <p>You don't have an account. Sign up</p>
      </div>
    </div>
  );
}

export default Login;
