// LoginChat.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../components/Chat';


export function LoginChat({ setUsuario ,usuario ,setUsuarios , usuarios , idUsuario , setIdUsuario}) {
  
  const navigate = useNavigate()
  // const [redirectToChat, setLinkRedirectToChat] = useState(false);

  const handleUsernameChange = (event) => {
    console.log('entraaaaaa');
    console.log(usuario);
    setUsuario(event.target.value)
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('token', idUsuario)
    socket.emit('nuevo-usuario' , {usuario, idUsuario } )
    // setUsuarios([...usuarios,usuario])
   
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
        value={usuario}
        onChange={handleUsernameChange}
      />
      <br />
      <input
        type="text"
        placeholder="id usuario"
        value={idUsuario}
        onChange={(e) => {
          setIdUsuario(e.target.value)
          
          }
          
          }
      />
      <button type="submit">Ingresar al chat</button>
    </form>
  );
}


