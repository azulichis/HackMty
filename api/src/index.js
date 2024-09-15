const AWS = require('aws-sdk');
const multer = require('multer'); 


// Configura tus credenciales de AWS (ya lo hiciste con aws configure)
AWS.config.update({ region: 'us-east-1' }); // Ajusta la región a la que corresponda

// Crear un servicio Rekognition
const rekognition = new AWS.Rekognition();

// Configurar multer para la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para verificar el ID
app.post('/api/verify-id', upload.single('idPhoto'), (req, res) => {
  const params = {
    Image: {
      Bytes: req.file.buffer,  // La imagen se obtiene del buffer que multer maneja
    },
    Attributes: ['ALL'], // Puedes obtener atributos como emociones, etc.
  };

  rekognition.detectFaces(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error analizando la imagen' });
    } else {
      console.log('Análisis de la imagen exitoso', data);
      if (data.FaceDetails.length > 0) {
        res.json({ message: 'Identificación verificada con éxito.', details: data.FaceDetails });
      } else {
        res.json({ message: 'No se detectó ningún rostro en la imagen.' });
      }
    }
  });
});

// Iniciar servidor
app.listen(8080, () => {
  console.log('Servidor corriendo en puerto 8080');
});