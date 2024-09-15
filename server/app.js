const express = require('express');
const mysql = require('mysql2'); // Asegúrate de que sea mysql2
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Permite solicitudes CORS
app.use(bodyParser.json()); // Analiza cuerpos de solicitud JSON

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',         // Dirección del servidor MySQL
  user: 'root',              // Usuario de MySQL
  password: 'Apb_9205', // Contraseña de MySQL
  database: 'hackmty' // Nombre de tu base de datos
});

// Conectar a la base de datoss
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Ruta para obtener datos de una tabla
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM nombre_de_tabla', (error, results, fields) => {
    if (error) {
      console.error('Error en la consulta:', error);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

