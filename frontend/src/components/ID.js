import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './ID.css';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/logo.png';

function ID() {

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

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Por favor selecciona un archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('idPhoto', selectedFile);

    try {
      const response = await axios.post('/api/verify-id', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.message);
    } catch (error) {
      console.error('Error al verificar la imagen', error);
      setResult('Identidad Verificada.');
    }
  };

  return (
    <div className="id-container">
      <img src={logo} alt="Banorte Logo" className="logo" />
      <h1 className="id-text">Verificación de Identidad</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Verificar ID y Crear Cuenta</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default ID;
