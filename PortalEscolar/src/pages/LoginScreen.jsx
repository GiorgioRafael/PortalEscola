import React, { useState } from 'react';
import Register from "../axiosConfig/RegisterConfig";
import Login from '../axiosConfig/LoginConfig';

const LoginScreen = ({ onLoginSuccess }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('Login');
  const [mensagem, setMensagem] = useState("");

  const handleRegister = async () => {
    const valid = await Register(user,password)

    if(valid == true){
      handleEntrar()
    }
    else {
      setMensagem("Usuario Invalido");
    }
    
    
  }
  const handleEntrar = async () => {
    const valid = await Login(user,password)

    if(valid == true){
      onLoginSuccess();
    }
    else{
      setMensagem("Usuario Invalido");
      
    }
      
  };

  return (
    <div>
      {state === 'Login' ? (
        <>
          <h1>Login de usuário</h1>
          <p>e_mail</p>
          <input
            className="LoginInput"
            type="text"
            name="Login"
            id="login"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <p>Senha</p>
          <input
            className="LoginInput"
            type="password"
            name="senha"
            id="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleEntrar}>Entrar</button>
          <br />
          <button onClick={() => setState('Register')} className="button">
            Não tenho uma conta
          </button>
        </>
      ) : (
        <>
          <h1>Criação de conta</h1>
          <p>E-Mail</p>
          <input
            className="LoginInput"
            type="text"
            name="Login"
            id="login"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <p>Senha</p>
          <input
            className="LoginInput"
            type="password"
            name="senha"
            id="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleRegister}>Criar Conta</button>
          <br />
          <button onClick={() => setState('Login')} className="button">
            Fazer Login
          </button>
          
        </>
      )}
    </div>
  );
};

export default LoginScreen;