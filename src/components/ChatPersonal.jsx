import React, { useEffect, useState, useRef } from 'react';
// import { socket } from '../App';
import { Link, useParams } from 'react-router-dom';
import { sesion } from '../data/data.js'


export const ChatPersonal = ({ usuario, setUsuario, usuarios, setUsuarios }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const refMessages = useRef([])
  const [socketOn, setSocketOn] = useState(false)

  const [users, setUsers] = useState([]);
  const { id } = useParams()
  console.log( id);

  const handleSendMessage = (event) => {
    event.preventDefault();
    // if (message.trim() !== '') {
    //   setMessages([...messages, message]);
    // }
    // console.log(message);
    console.log('dispara');
    const conversation = {
      msg: message,
      user: usuario
    }
    socket.emit('enviar-mensaje', conversation)
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };



  useEffect(() => {
    socket.on('connect', (algo) => {
      socket.emit('unirSala', { sesion , id })
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

  useEffect(() => {

    socket.on('nuevo-usuario', (data) => {
      console.log(data);
      setUsuarios([...usuarios,data])
      
    })
    // socket.emit('lista-users' , usuarios)

    // if(!usuarios.length){
    //     socket.on('retorna-lista', (data) =>{
    //       setUsuarios([...data])
    //     })
    // }

  }, [usuarios])


  return (
    <div className="app">
      <button className='btn-inicio'>
        <Link to="/" >home</Link>
      </button>
      <div className="sidebar">
        <h2>Usuarios</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat">
        <div className='container-chat-personal'>
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

        

      </div>

    </div>
  );
};
