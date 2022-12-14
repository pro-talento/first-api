const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const controllers = require('./cotrollers');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const usuarios = [];

// Endpoints
app.get('/', (req, res) => {
  const usersHtml = usuarios.map(u => `<li>${u.name} tiene ${u.age}</li>`).join('');
  res.send(`
    <ul>${usersHtml}</ul>
    <script>
      setTimeout(() => {location.reload()}, 3000);
    </script>
  `);
});

// app.get('/game')
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '/webpage/game.html'));
});

// console.log(path.join(__dirname, '/webpage/index.html'));
app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, '/webpage/index.html'));
});


app.post('/api', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.status(202).json({ message: 'Hola ' + req.body.name + ' de ' + req.body.age });
});

app.post('/api/auth/signup', controllers.auth.signup);
app.login('api/auth/login', controllers.auth.login);

app.listen(3000, () => {
  console.log('El servidor esta vivo en el puerto 3000 !!!');
})