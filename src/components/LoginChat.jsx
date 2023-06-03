// LoginChat.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function LoginChat() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate()
  // const [redirectToChat, setLinkRedirectToChat] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/chat')
  //   if (username.trim() !== '') {
  //     setLinkRedirectToChat(true);
  //   }
  // };

  // if (redirectToChat) {
  //   return <Link to={`/chat/${username}`} />;
  // }
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


