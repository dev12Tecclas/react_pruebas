import React from 'react'
import { users } from '../data/data'
import { Link } from 'react-router-dom'

export default function UsuariosComponent() {
  return (
    <div>
        { users?.map( user => {
         return <div key={user.name}>
            <span>{user.name } </span>
            <button className='btn-inicio'>
        <Link to={`/mensaje/${user.id}`} >conversacion</Link>
      </button>
          </div>
        })}
    </div>
  )
}
