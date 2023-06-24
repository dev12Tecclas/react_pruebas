import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import { LoginChat } from './components/LoginChat'
import { Chat } from './components/Chat'
import { ChatPersonal } from './components/ChatPersonal'
import UsuariosComponent from './components/UsuariosComponent'
import axios from 'axios'
// import { io } from 'socket.io-client'

// export const socket = io('http://localhost:2000')
// export const socket = io('https://9030-181-33-145-163.ngrok-free.app')
// export const socket = io('https://maritus.serveo.net/')

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState('')
  const [idUsuario , setIdUsuario ] = useState('')

  useEffect(() => {
    // let config = {
    //   method: 'get',
      
    //   url: 'https://e2a4-181-33-227-32.ngrok-free.app/',
    //   // url: 'http://localhost:2000',
    //   headers: { }
    // };
    
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.request(config)
    // .then((response) => {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
    // axios("https://98e0-181-33-227-32.ngrok-free.app").then((response) => { console.log(response.data)}).catch( (error) => { console.log(error.message) });
    //   let data = new FormData();
    //   data.append('funcion', 'subirImagen');
    //   data.append('file', []);

  //   console.log(data);
  // let config = {
  //   method: 'post',
  //   url: 'https://9fd8-181-33-227-32.ngrok-free.app/api/publicaciones',
  //   headers: {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgxZDVhMTI0ZmU1MjU4OTg4MDc5ZjEiLCJ0ZWxlZm9ubyI6IjMxMjU0MzAzMjEiLCJjb2RpZ29QYWlzIjoiNTciLCJub21icmUiOm51bGwsImNvcnJlbyI6bnVsbCwiZmVjaGFSZWdpc3RybyI6IjIwMjMtMDYtMDhUMTM6MjA6MzMuMDUxWiIsImlhdCI6MTY4NjIzMDQzM30.lhQYooHEkQ4Mbxw6bmVcQ5eenjlavB5Di5EhGc3e8yY',
  //     'content-type': 'multipart/form-data'
  //   },
  //   data: data
  // };
  // axios.request(config)
  //   .then((response) => {
  //     // console.log(JSON.stringify(response.data));
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });

}, [])

return (
  <>


    <button className='btn-inicio'>
      <Link to="/mensaje" >conversacion</Link>
    </button>
    <h1>Chat en React</h1>
    <div className="app">
      {/* <Route path="/chat/:username" element={<Cha} /> */}
    </div>

    <Routes>

      {/* <Route exact path='/' element={<UsuariosComponent/>}/> */}
      <Route path="/" element={[<LoginChat
        setUsuario={setUsuario}
        usuario={usuario}
        setUsuarios={setUsuarios}
        usuarios={usuarios}
        idUsuario={idUsuario}
        setIdUsuario={setIdUsuario}

      // />, <UsuariosComponent />]}
      />]}

      />
      <Route path='/chat' element={<Chat
        usuario={usuario}
        setUsuario={setUsuario}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
      />} />
      {/* <Route path='/mensaje/:id' element={<ChatPersonal
        usuario={usuario}
        setUsuario={setUsuario}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
      />} /> */}
    </Routes>
    
  </>
)
}

export default App
