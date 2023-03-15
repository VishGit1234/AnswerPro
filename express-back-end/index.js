//Import statements
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Load env file data
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

const app = express();
const port = 3000;

//Use CORS
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));

//Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;

//Connect to data base (with error function)
database.on('error', (error) => {
  console.log(error)
})

//Initilization of Database (runs once)
database.once('connected', () => {
  console.log('Database Connected');
})

//Adds middleware that only parses json (ensuring all requests are json)
app.use(express.json());

//Load routes file
const routes = require('./routes/routes');
app.use('/api', routes);

//Listen on port (in this case 5000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});