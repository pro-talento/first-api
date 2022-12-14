
const signup = (req, res) => {
  console.log(req.body);
  const { name, age } = req.body;
  usuarios.push({ name, age });
  res.status(200).json({ message: 'Usuario agregado exitosamente' });
}

const login = (req, res) => {
  res.status(200).json({ message: 'Inicio sesión exitoso' });
}

module.exports = {
  loging,
  signup
}