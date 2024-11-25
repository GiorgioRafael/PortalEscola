import React, { useState } from 'react';
import Config from "../axiosConfig/config"

const LoginScreen = ({ onLoginSuccess }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('Login');

  const handleRegister = () => {
    Config(user,password)
  }
  const handleEntrar = () => {
    // lógica de verificação de login
    
    // Supondo que a verificação de login foi bem-sucedida
    onLoginSuccess();
  };

  return (
    <div>
      {state === 'Login' ? (
        <>
          <h1>Login de usuário</h1>
          <p>Usuario</p>
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