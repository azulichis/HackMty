import { useState } from 'react';
import axios from 'axios';

function QuizForm() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/quiz', answers);
    alert('Cuestionario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pregunta 1:
        <input
          type="text"
          name="question1"
          value={answers.question1}
          onChange={handleChange}
        />
      </label>
      <label>
        Pregunta 2:
        <input
          type="text"
          name="question2"
          value={answers.question2}
          onChange={handleChange}
        />
      </label>
      <label>
        Pregunta 3:
        <input
          type="text"
          name="question3"
          value={answers.question3}
          onChange={handleChange}
        />
      </label>
      <label>
        Pregunta 4:
        <input
          type="text"
          name="question4"
          value={answers.question4}
          onChange={handleChange}
        />
      </label>
      <label>
        Pregunta 5:
        <input
          type="text"
          name="question5"
          value={answers.question5}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default QuizForm;
