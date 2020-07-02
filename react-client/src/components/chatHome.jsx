import React from "react";
import ReactDom from "react-dom";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
  }

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
