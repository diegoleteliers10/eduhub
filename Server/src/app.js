const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const morgan= require('morgan');
const router = require('./routes/routes')
//creating express server
const server= express()

//middlewares
server.use(bodyParser.json());
server.use(cors());
server.use((req, res, next) => {
  const allowedOrigins = [
    `http://localhost:3001/`,
  ];

  const origin = req.headers.origin;
  if(allowedOrigins.includes(origin)){
    res.header('Access-Control-Allow-Origin', origin); // update to match the domain you will make the request from
  }
  res.header("Access-Control-Allow-Credentials", "true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use(morgan("dev"));
server.use("/", router);


module.exports= server;