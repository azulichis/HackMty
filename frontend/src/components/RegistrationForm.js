import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css'; // Asegúrate de que esté importado correctamente
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/logo.png'; // Asegúrate de que la ruta sea correcta

function RegistrationForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/api/register', {
      name,
      email,
      password,
      age,
      sex,
      terms,
      privacy,
    });
    window.location.href = '/verify-id'; // Redirige a la página de preguntas
  };

  const idClick = () => {
    handleSubmit(); // Envía los datos del formulario
    navigate('/verify-id'); // Redirige a la página de preguntas
  };

  return (
    <div className="container">
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            className='input-style2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        {/* Campo de selección de sexo con botones de radio */}
        <div className="radio-group">
          <label>
            Hombre
            <input type="radio" value="Hombre" checked={sex === 'Hombre'} onChange={(e) => setSex(e.target.value)} />
          </label>
          <label>
            Mujer
            <input type="radio" value="Mujer" checked={sex === 'Mujer'} onChange={(e) => setSex(e.target.value)} />
          </label>
          <label>
            Otro
            <input type="radio" value="Otro" checked={sex === 'Otro'} onChange={(e) => setSex(e.target.value)} />
          </label>
        </div>

        <label className="terms">
          Acepto los  <a href="https://www.banorte.com/wps/portal/banorte/Home/servicios-en-linea/banca-digital/banco-linea/terminos-condiciones" target="_blank" rel="noopener noreferrer"> Términos y Condiciones</a>
          <input 
            type="checkbox" 
            checked={terms} 
            onChange={(e) => setTerms(e.target.checked)} 
          />
        </label>

        <label className="privacy">
          Acepto los  <a href="https://www.banorte.com/wps/portal/gfb/Home/banorte-te-informa/aviso-de-privacidad" target="_blank" rel="noopener noreferrer"> Avisos de Privacidad</a>
          <input 
            type="checkbox" 
            checked={privacy} 
            onChange={(e) => setPrivacy(e.target.checked)} 
          />
        </label>

        <button type="submit" onClick={idClick}>Siguiente</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
