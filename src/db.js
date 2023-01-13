const fs = require('fs')
// const path = require('path')

function searchSession(sessionId) {
  const data = fs.readFileSync('database.txt', 'utf-8');
  const parsedData = JSON.parse(data);
  const session = parsedData[sessionId];

  if (!session) {
    return null;
  }

  return session;
}

function saveData(sessionId, newData) {
  if (typeof newData === 'object') {
    if (searchSession(sessionId)) {
      const data = fs.readFileSync('database.txt', 'utf-8');
      const parsedData = JSON.parse(data);
      parsedData[sessionId] = newData
      const stringifiedData = JSON.stringify(parsedData);
      console.log(stringifiedData)
      fs.writeFileSync('database.txt', stringifiedData);
    } else {
      throw new Error('session not found')
    }
  } else {
    throw new Error('wrong type of newData, should be object');
  }
}

module.exports = {
  searchSession,
  saveData
}
