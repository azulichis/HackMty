import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/logo.png'; // Ruta actualizada
import lana from './imagenes/saltando.png';
import './Hola.css';

function Hola() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
        navigate('/empezar'); // Redirige a RegistrationForm
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="hola-container">
      <img src={logo} alt="Banorte Logo" className="logo" />
      <h1 className="bold-text">
        ¡Bienvenido, Banortito!
      </h1>
      <h1 className="hola-text">
        Soy Lana, soy una IA que te estará acompañando en tu proceso de integración a BANORTE a través de educación financiera
      </h1>
      <img src={lana} alt="Lana Saltando" className="lana" />
    </div>
  );
}

export default Hola;
