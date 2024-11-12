import React from 'react';

const Home = ({ onPageNotas }) => {
  const handlePageNotas = () => {
    onPageNotas();
  };

  return (
    <div>
      <h1>Bem vindo a home!</h1>
      <p>Verificacao de notas:</p>
      <button onClick={handlePageNotas}>Acessar notas</button>
    </div>
  );
};

export default Home;