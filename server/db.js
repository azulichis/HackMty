// /server/db.js
const mysql = require('mysql2');

// Conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto si es otro usuario
  password: 'password', // Cambia esto por tu contraseña
  database: 'finanzas' // Nombre de tu base de datos
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = connection;
