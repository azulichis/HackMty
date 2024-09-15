import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/api/register', {
      name,
      password,
      age,
      sex,
      privacy
    });
    window.location.href = '/quiz'; // Redirige a la página de preguntas
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Edad:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Sexo:
        <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
      </label>
      <label>
        Aviso de Privacidad:
        <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegistrationForm;
