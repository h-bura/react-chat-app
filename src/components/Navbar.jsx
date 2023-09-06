import React from "react";
function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7536593/pexels-photo-7536593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="user"
        ></img>
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
