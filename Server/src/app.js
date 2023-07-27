const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const morgan= require('morgan');
const router = require('./routes/routes')
//creating express server
const server= express()
// const User= require('../src/models/User.model')

// User.create({
//   fullname:"Diego Letelier",
//   username:"diegolete10",
//   email:"diegolete@gmail.com",
//   password:"Sofi2009_",
//   phone:"978181654",
//   age:23,
//   gender:"Male",
//   university:"Del Desarrollo",
//   year:"3rd year",
// })

//middlewares
server.use(bodyParser.json());
server.use(cors());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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