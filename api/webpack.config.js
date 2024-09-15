const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada para tu aplicación Express
  target: 'node', // Configuración para Node.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2', // Formato de módulo para Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development', // Cambia a 'production' para producción
};
