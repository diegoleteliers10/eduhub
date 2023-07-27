const server = require("./src/app");
const sequelize = require("./src/db");

server.listen(3001, async () => {
  console.log("Server raised in port: " + 3001); 
  await sequelize.sync({ force: false});
});