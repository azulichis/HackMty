import React from 'react';
import './Analizando.css'; // Asegúrate de tener este archivo CSS
import logo from './imagenes/logo.png'; // Ruta del logo
import imagen3 from './imagenes/dinerodinero.png'; // Ruta de la imagen encima del círculo
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Analizando() {
    const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
        navigate('/fin'); // Redirige a RegistrationForm
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="analizando-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="message-container">
        <p className="message">Estoy analizando tus respuestas</p>
      </div>
      <div className="circle-container">
        <div className="circle">
          <img src={imagen3} alt="Imagen" className="imagen2" />
        </div>
      </div>
    </div>
  );
}

export default Analizando;
