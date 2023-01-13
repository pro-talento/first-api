const fs = require('fs')
const path = require('path')

function searchSession(sessionId) {
  // Algoritmo para buscar la sesión
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

console.log(searchSession(1)); // { nombre: 'Misael' }
console.log(typeof searchSession(1)); // object

module.exports = {
  searchSession
}
