const fs = require('fs')
const path = require('path')

// Leer un archivo (El archivo tiene que existir)
// fs.readFile('database.txt','utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const parsedData = JSON.parse(data)
//   console.log(parsedData)
// });

// Escribir en un archivo (El archivo tiene que existir)
const data = 'Este es el nuevo contenido del archivo'

fs.writeFile('database.txt', data, (err) => {
  if (err) {
    throw err;
  }

  console.log('Datos guardados exitosamente ✅');
});