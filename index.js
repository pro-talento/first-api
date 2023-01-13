const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const controllers = require('./controllers');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const usuarios = [];

// Ruta -> Vista (Responde es HTML)
app.get('/', (req, res) => {
  const usersHtml = usuarios.map(u => `<li>${u.name} tiene ${u.age}</li>`).join('');
  res.send(`
    <ul>${usersHtml}</ul>
    <script>
      setTimeout(() => {location.reload()}, 3000);
    </script>
  `);
});

// Ruta -> Vista (Responde es HTML)
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '/webpage/game.html'));
});

// Ruta -> Vista (Responde es HTML)
app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, '/webpage/index.html'));
});

// Ruta -> Endpoint (Responde JSON) -> API
app.post('/api', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.status(202).json({ message: 'Hola ' + req.body.name + ' de ' + req.body.age });
});

// Ruta -> Endpoint (Responde JSON) -> API
app.post('/api/auth/signup', controllers.auth.signup);

// Ruta -> Endpoint (Responde JSON) -> API
app.post('/api/auth/login', controllers.auth.login);

app.get('/api/sessions/:id', (req, res) => {
  const { id: session_id } = req.params;
  console.log({ session_id: session_id });
  //TODO: Obtener sesion de base de datos

  //TODO: Validar si la sesión existe en la base de datos
  if (false) {
    return res.status(404).json({ message: 'Session not found' })
  }
  return res.status(200).json({ session_id });
});

//TODO: Generar un endpoint post para actualizar los datos de una sesión (solo sesiones existentes)

app.listen(3000, () => {
  console.log('El servidor esta vivo en el puerto 3000 !!!');
})