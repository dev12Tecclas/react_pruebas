// LoginChat.js

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginChat() {
  const [username, setUsername] = useState('');
  const [redirectToChat, setRedirectToChat] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      setRedirectToChat(true);
    }
  };

  if (redirectToChat) {
    return <Redirect to={`/chat/${username}`} />;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Ingresa tu nombre de usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <button type="submit">Ingresar al chat</button>
    </form>
  );
}

export default LoginChat;
