import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import QuizForm from './components/QuizForm';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/quiz" element={<QuizForm />} />
          <Route path="/" element={<h1>Bienvenido</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
