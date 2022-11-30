const express = require('express');
const app = express();

// Endpoints
app.get('/', (req, res) => {
  res.send('Hola, bienvenido a mi sitio web!');
});

app.listen(3000, () => {
  console.log('El servidor esta vivo !!!');
})