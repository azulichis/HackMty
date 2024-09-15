import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import QuizForm from './components/QuizForm';
import WelcomePage from './components/WelcomePage';
import Hola from './components/Hola';
import Empezar from './components/Empezar';
import Pregunta1 from './components/Pregunta1';
import Pregunta2 from './components/Pregunta2';
import Pregunta3 from './components/Pregunta3';
import Pregunta4 from './components/Pregunta4';
import Pregunta5 from './components/Pregunta5';
import Analizando from './components/Analizando';
import Quiz from './components/Quiz';
import ID from './components/ID';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/quiz" element={<QuizForm />} />
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/hola" element={<Hola/>} />
          <Route path="/empezar" element={<Empezar/>} />
          <Route path="/pregunta1" element={<Pregunta1/>} />
          <Route path="/pregunta2" element={<Pregunta2/>} />
          <Route path="/pregunta3" element={<Pregunta3/>} />
          <Route path="/pregunta4" element={<Pregunta4/>} />
          <Route path="/pregunta5" element={<Pregunta5/>} />
          <Route path="/process" element={<Analizando/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="verify-id" element={<ID/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
