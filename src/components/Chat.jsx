
import React, { useState } from 'react';
/* import './styles.css'; */

export const  Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="app">
      <h1>Chat en React</h1>
      <div className="chat">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="message-input">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={message}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
