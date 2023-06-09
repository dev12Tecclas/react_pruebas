import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
// import { socket } from '../App';
import { io } from 'socket.io-client'
import { MensajePrivado } from './MensajePrivado';

 export const socket = io('http://localhost:2000',{
  'extraHeaders': {
    'x-token': localStorage.getItem('token')
}
})


export const Chat = ({ usuario, setUsuario, usuarios, setUsuarios , idUsuario}) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const refMessages = useRef([])
  const [socketOn, setSocketOn] = useState(false)

  const [users, setUsers] = useState([]);


  const handleSendMessage = (event) => {
    event.preventDefault();
    // if (message.trim() !== '') {
    //   setMessages([...messages, message]);
    // }
    // console.log(message);
    console.log('dispara');
    const conversation = {
      msg: message,
      user: usuario,
      id : idUsuario
    }
    socket.emit('enviar-mensaje', conversation)
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };



  useEffect(() => {
 
    socket.on('connect', () => {
      setSocketOn(true)
    
    });


    console.log('entra');
    socket.on('nuevo-mensaje', (data) => {
      setMessages([...messages, data])
      setMessage('');
    })


    return () => {
      socket.off('nuevo-mensaje')
    }

  }, [messages])


  //! mensaje privados
  useEffect(() => {
 
    socket.on('connect', () => {
      setSocketOn(true)
    
    });


    socket.on('nuevo-mensaje-p', (data) => {
      console.log('entra-pe');
      console.log(data);
      setMessages([...messages, data])
      setMessage('');
    })


    return () => {
      socket.off('nuevo-mensaje-p')
    }

  }, [messages])

  useEffect(() => {

    socket.on('nuevo-usuario', (data) => {
      console.log(data, 'ususario');
      // setUsuarios([...usuarios,data])
      setUsuarios([...data])
      
    })
    // socket.emit('lista-users' , usuarios)

    // if(!usuarios.length){
    //     socket.on('retorna-lista', (data) =>{
    //       setUsuarios([...data])
    //     })
    // }

  }, [usuarios])

  console.log(usuarios);
  return (
    <div className="app">
       <button className='btn-inicio'>
        <Link to="/" >home</Link>
      </button>
      <br />
      <div className="sidebar">
        <h2>Usuarios</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat">
        <div className='container-chat'>
          <div className="message-list">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {`${message.user} => ${message.msg}`}
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

        <div className='users'>
          {usuarios?.map((usuario, index) =>
            <div key={usuario}>
            <span>{usuario.usuario}= </span>
            <span>{usuario.idUsuario}</span>
            
            </div>
          )}
        </div>

      </div>
      <br/>
      <hr/>
      <MensajePrivado usuario={usuario}/>

    </div>
  );
};
