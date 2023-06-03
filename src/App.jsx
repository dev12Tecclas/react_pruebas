import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Chat } from './components/Chat'
import { Routes , Route  } from 'react-router-dom'
import { io } from 'socket.io-client'
import HomePage from './components/HomePage'
import LoginChat from './components/LoginChat'
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
       <Route>
      <div className="app">
        <h1>Chat en React</h1>
          <Route exact path="/" component={LoginChat} />
          <Route path="/chat/:username" component={ChatContainer} />
      </div>
    </Route>
    </>
  )
}

export default App
