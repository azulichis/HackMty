import React from 'react';
import './Analizando.css'; // Asegúrate de tener este archivo CSS
import logo from './imagenes/logo.png'; // Ruta del logo
import imagen4 from './imagenes/tarjeta.png'; // Ruta de la imagen encima del círculo
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
    const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
        navigate('/pregunta1'); // Redirige a RegistrationForm
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
          <img src={imagen4} alt="Lana4" className="imagen4" />
        </div>
      );
}

export default Quiz;
