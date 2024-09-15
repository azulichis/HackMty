import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import logo from './imagenes/logo.png';
import lana from './imagenes/corazon.png';
import './Empezar.css';

function Empezar() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    navigate('/pregunta1'); // Redirige a la página de pregunta 1
  };

  return (
    <div className="empezar-container">
      <img src={logo} alt="Banorte Logo" className="logo" />
      <h1 className="empezar-text">
        ¡Es momento de poner a prueba tus conocimientos!
      </h1>
      <img src={lana} alt="Corazon" className="lana" />
      <button className="empezar-button" onClick={handleClick}>
        ¡Comencemos!
      </button>
    </div>
  );
}

export default Empezar;


