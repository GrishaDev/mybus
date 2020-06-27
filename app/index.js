
var app = require('./app.js');
var debug = require('debug')('mybus:server');
var http = require('http');

const mongoose = require('mongoose');


const env = process.env.NODE_ENV.trim();

const prod = process.env.DB_URL_PROD;
const test = process.env.DB_URL_TEST;
const dev = process.env.DB_URL;

console.log(`${env} environment.`);

const connectionUrl = env === 'production' ? prod : env === 'test' ? test : dev;

console.log(`Connecting to ${connectionUrl}`);

mongoose.connect(connectionUrl, { useUnifiedTopology: true , useNewUrlParser: true } )
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error(`Database connection error: ${err}`);
  })

mongoose.set('useFindAndModify', false);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);



var server = http.createServer(app);


server.listen(port, () => {
    console.log(`Listening on ${port}`);
});

server.on('error', onError);
// server.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}


module.exports = server;