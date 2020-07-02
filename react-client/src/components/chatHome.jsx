import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      handel: "",
      btn: "",
      output: "",
      feedback: "",
    };
  }
  //   sendf() {
  //     var btn = document.getElementById("send");
  //     btn.addEventListener("click", function () {
  //       socket.emit("chat", {
  //         message: message.value,
  //         handle: handle.value,
  //       });
  //       message.value = "";
  //     });
  //   }

  //   messagef() {
  //     var message = document.getElementById("message");
  //     message.addEventListener("keypress", function () {
  //       socket.emit("typing", handle.value);
  //     });
  //   }

  render() {
    return (
      <div id="mario-chat">
        <h2>HamHome Chat</h2>
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <input id="handle" type="text" placeholder="Handle" />
        <input id="message" type="text" placeholder="Message" />
        <button id="send">Send</button>
      </div>
    );
  }
}

export default ChatRoom;
