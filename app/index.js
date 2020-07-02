
const app = require('./app.js');
const http = require('http');
const https = require('https');
const fs = require("fs");
const { configureMongo, configureWebPush, normalizePort } = require('./helpers/startConfigs');


// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };

configureWebPush();
configureMongo();

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
// const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});
server.on('error', onError);




function onError(error) {
  if (error.syscall !== 'listen') throw error;

  let bind = typeof port === 'string'
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

// function onListening() {
//   let addr = server.address();
//   let bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//   console.log('Listening on ' + bind);
// }


module.exports = server;