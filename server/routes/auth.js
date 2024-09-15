// /server/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../db'); // Conexión a la base de datos

const router = express.Router();

// Ruta de registro de usuarios
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Encripta la contraseña

  connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) return res.status(500).send('Error al registrar');
    res.status(201).send('Usuario registrado');
  });
});

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err || results.length === 0) return res.status(400).send('Usuario no encontrado');

    const user = results[0];

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send('Contraseña incorrecta');
    }

    const token = jwt.sign({ id: user.id }, 'clave_secreta', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

module.exports = router;
