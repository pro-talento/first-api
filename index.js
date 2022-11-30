const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const usuarios = [];

// Endpoints
app.get('/', (req, res) => {
  const usersHtml = usuarios.map(u => `<li>${u.name} tiene ${u.age}</li>`).join('');
  res.send(`
    <ul>${usersHtml}</ul>
  `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.status(202).send('Hola ' + req.body.name + ' de ' + req.body.age);
});

app.post('/registro', (req, res) => {
  const { name, age } = req.body;
  usuarios.push({ name, age });
  res.status(200).send('Usuario agregado exitosamente');
});

app.listen(3000, () => {
  console.log('El servidor esta vivo en el puerto 3000 !!!');
})