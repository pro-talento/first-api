let users = []

const signup = (req, res) => {
  const { email, password } = req.body;
  if(users.find(user => user.email === email)) {
    return res.status(402).json({ message: 'User already created' });
  }
  users = users.concat({ email, password });
  console.log(users);
  return res.status(200).json({ email });
}

const login = (req, res) => {
  const { email, password } = req.body;
  
  // Buscar al usuario en el array
  const userFound = users.find(user => {
    if (user.email === email) {
      if (user.password === password) {
        return true;
      }
    }
    return false
  })

  // Si el usuario no fue encontrado o la contraseña no fue la correcta contestamos:
  if (!userFound) {
    return res.status(404).json({ message: 'Incorrect password' });
  };

  userFound.password;
  return res.status(200).json(userFound);
}

module.exports = {
  login,
  signup
}