import { useState } from 'react';
import './App.css';
import LoginScreen from './pages/LoginScreen';
import Home from './pages/Home';
import Notas from './pages/Notas';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const handleLoginSuccess = () => {
    setCurrentScreen('Home');
  };

  const handleChangeToNotas = () => {
    setCurrentScreen('Notas');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
      case 'Home':
        return <Home onPageNotas={handleChangeToNotas} />;
      case 'Notas':
        return <Notas />;
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}

export default App;