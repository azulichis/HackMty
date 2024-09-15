import { useNavigate } from 'react-router-dom';
import './Pregunta2.css'; // Asegúrate de tener este archivo CSS
import imagen1 from './imagenes/logo.png'; // Ruta de la primera imagen
import imagen2 from './imagenes/carita.png'; // Ruta de la segunda imagen
import React, { useState } from 'react';

function Pregunta2() {

    const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    navigate('/pregunta3'); // Redirige a la página de pregunta 1
  };

    const [respuesta, setRespuesta] = useState('');
        
    const handleInputChange = (e) => {
        setRespuesta(e.target.value);
    };
  return (
    
    <div className="pregunta1-container">
    <img src={imagen1} alt="Imagen 1" className="imagen1" />
      <div className="top-bar"></div>
      <div className="content">
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        <div className="question-container">  
         <img src={imagen2} alt="Imagen 2" className="imagen2" />
         <div className='textos'>
           <p>¿Qué productos financieros has utilizado o conoces?</p> 
           <p>(Por ejemplo: cuentas de ahorro, tarjetas de crédito, inversiones, etc.)</p>
         </div>
        </div>
        <div className="linea-negra"></div> {/* Línea negra centrada */}
        <div className="respuesta-cuadro">
          <input
            type="text"
            className='input-style1'
            value={respuesta}
            onChange={handleInputChange}
            placeholder="Escribe tu respuesta aquí..."
          />
          <button className="siguiente-button" onClick={handleClick}>
             Siguiente
          </button>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Pregunta2;

