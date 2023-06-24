import React, { useState } from 'react'
import { socket } from './Chat'

export const MensajePrivado = ( { setMessages  , usuario}) => {
    const [idDestino , setIdDestino ] = useState('')
    const [messagePrivate , setMessagePrivate ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('entro');
        socket.emit('mensaje-privado',{ id: idDestino , msg: messagePrivate , user:usuario})
    }
  return (
    <div style={{marginTop:'2rem'}}>
        <form onSubmit={handleSubmit}>
            <label>enviar a :</label>
            <input 
                value={idDestino}
                placeholder='ingresa el id del usuario'
                onChange={ (e) => setIdDestino(e.target.value)}
            />
            <br/>
            <label>Mensaje: </label>
            <input 
                value={messagePrivate}
                placeholder='escribe tu mensaje'
                onChange={(e) => setMessagePrivate(e.target.value)}
            />
            <br/> 
            <button type='submit'>Enviar</button>

        </form>
    </div>
  )
}
