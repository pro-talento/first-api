const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));

// Endpoints
app.get('/', (req, res) => {
  res.send(`
    <strong>Hola, bienvenido a mi sitio web!</strong>
  `);
});

app.post('/', (req, res) => {
  res.send('Esto es una petición POST 🚀');
})

app.listen(3000, () => {
  console.log('El servidor esta vivo en el puerto 3000 !!!');
})