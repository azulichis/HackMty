import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/logo.png'; // Ruta actualizada
import './WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
        navigate('/register'); // Redirige a RegistrationForm
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Bienvenido</h1>
      <img src={logo} alt="Banorte Logo" className="logo" />
    </div>
  );
}

export default WelcomePage;

