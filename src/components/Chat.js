import React, { useState } from "react";
import "../styles/Chat.css";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  //Implement AIChatbot project here.

  return (
    <div>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        💬 Chat
      </button>
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Chat with Ankit's AI</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-box">
            <p className="bot">AI: This feature will be available soon.</p>
          </div>
          <input type="text" placeholder="Under Construction..." disabled />
          {/*<button disabled>Send</button>*/}
        </div>
      )}
    </div>
  );
}

export default Chat;
