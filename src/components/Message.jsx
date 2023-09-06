import React from "react";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/18186432/pexels-photo-18186432/free-photo-of-beyaz-elbiseli-genc-bir-adamin-portresi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/18186432/pexels-photo-18186432/free-photo-of-beyaz-elbiseli-genc-bir-adamin-portresi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
