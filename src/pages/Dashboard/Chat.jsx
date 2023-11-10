// Chat.js
import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  const conversation = [
    { text: "Hello", sender: "user" },
    { text: "How can I assist you?", sender: "bot" },
    { text: "I need your help", sender: "user" },
    { text: "Which help?", sender: "bot" },
    { text: "I'm not able to login in my account", sender: "user" },
    { text: "try to change your username", sender: "bot" },
    { text: "okay let me try", sender: "user" },
    { text: "keep going", sender: "bot" },

  ];

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");

    const nextMessageIndex = messages.length;
    if (conversation[nextMessageIndex]) {
      setTimeout(() => {
        setMessages([...messages, conversation[nextMessageIndex]]);
      }, 1000);
    }
  };

  useEffect(() => {
    // Automatically start the conversation when the component mounts
    if (conversation.length > 0) {
      setTimeout(() => {
        setMessages([conversation[0]]);
      }, 1000);
    }
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-messages" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <span className="chat" onClick={handleSendMessage}>
          Send
        </span>
      </div>
    </div>
  );
};

export default Chat;
