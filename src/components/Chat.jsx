import React from 'react'

export default function Chat() {
  return (
    <div className='chat'>
        <div>
        <ul></ul>

        </div>
        <div className='formChat'>
        <form >
            <input type='text' autoComplete='off'/>
            <button type='submit'>Enviar</button>
        </form>

        </div>
    </div>
  )
}
