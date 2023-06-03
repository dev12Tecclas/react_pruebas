import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Chat } from './components/Chat'
import { Routes , Route  } from 'react-router-dom'
import { io } from 'socket.io-client'
import HomePage from './components/HomePage'
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
        <h1>CHAT</h1>
      <Routes>

        <Route exact path="/" element={<HomePage/>} />
        <Route path="/chat" element={<Chat/>} />
      
    </Routes>
      {/* <Chat/> */}
    </>
  )
}

export default App
