const server = require('./src/app'); // Corrected import path

const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT); // Corrected variable name 'server'
});