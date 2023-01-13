const fs = require('fs')
const path = require('path')

function searchSession(sessionId) {
  const data = fs.readFileSync('database.txt', 'utf-8');
  const parsedData = JSON.parse(data);
  const session = parsedData[sessionId]

  if (!session) {
    return null
  }

  return session

  // Algoritmo para buscar la sesión (async)
  // fs.readFile('database.txt', 'utf-8', (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   const parsedData = JSON.parse(data);
  //   const session = parsedData[sessionId]

  //   if (!session) {
  //     return callback(null)
  //   }

  //   return callback(session)
  // });
}

function guardarDatos(nuevosDatos) {
  fs.writeFile('database.txt', nuevosDatos, (err) => {
    if (err) {
      throw err;
    }
  
    console.log('Datos guardados exitosamente ✅');
  });
}

// Leer un archivo (El archivo tiene que existir)
fs.readFile('database.txt','utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  const parsedData = JSON.parse(data)

  parsedData[1] = { nombre: "Misael" }
  parsedData[2] = { nombre: "David" }
  parsedData[3] = { nombre: "Angel" }

  const stringifiedJSON = JSON.stringify(parsedData)
  guardarDatos(stringifiedJSON)
});

console.log(searchSession(1));


module.exports = {
  searchSession
}
