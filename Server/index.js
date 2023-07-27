require("./src/models/relations/relationship");
const { PORT } = process.env;
const server = require("./src/app");
const sequelize = require("./src/db");

server.listen(PORT, async () => {
	console.log("Server raised in port: " + PORT);
	await sequelize.sync({ force: true})
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
});