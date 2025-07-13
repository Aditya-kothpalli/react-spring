import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:8081/api/chat", {
      message: message,
    });
    setResponse(res.data);
  };

  return (
    <div>
      <h2>AI Assistant</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div><strong>Response:</strong> {response}</div>
    </div>
  );
}

export default ChatComponent;
