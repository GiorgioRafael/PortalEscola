import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Usuario</p>
      <input className="LoginInput" type="text" name="Login" id="login" />
      <br />
      <p>Senha</p>
      <input className="LoginInput" type="password" name="senha" id="senha" />
      <br />
      <button className="button">Criar conta</button>
      <button>Login</button>
    </>
  )
}

export default App
