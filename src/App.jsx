import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Routes , Route  } from 'react-router-dom'
import { io } from 'socket.io-client'
import HomePage from './components/HomePage'
import {LoginChat} from './components/LoginChat'
import { Chat } from './components/Chat'
export const socket = io('http://localhost:2000')

function App() {
  const [usuarios , setUsuario] = useState([])
  const [usuario , setUsuarios ] = useState([])
  useEffect(()=>{
    // socket.on('connection',()=>{
    //   console.log('socket ready');
    // })
  },[])

  return (
    <>
        <h1>Chat en React</h1>
      <div className="app">
          {/* <Route path="/chat/:username" element={<Cha} /> */}
      </div>
       <Routes>
          <Route exact path="/" element={<LoginChat/>} />
          <Route path='/chat' element={<Chat/>} />
    </Routes>
    </>
  )
}

export default App
