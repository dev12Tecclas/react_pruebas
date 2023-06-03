import React, { useState } from 'react';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

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

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      setUsers([...users, username]);
      setUsername('');
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Usuarios</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
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
      <div className="login">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};
