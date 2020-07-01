
const app = require('./app.js');
const http = require('http');
const https = require('https');
const fs = require("fs");
const mongoose = require('mongoose');
const webpush = require('web-push');

// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };

let server;

const publicVapidKey = process.env.VAPID_PUBLIC;
const privateVapidKey = process.env.VAPID_PRIVATE;
const env = process.env.NODE_ENV.trim();
const prod = process.env.DB_URL_PROD;
const test = process.env.DB_URL_TEST;
const dev = process.env.DB_URL;

console.log(`${env} environment.`);



// ======================================

const configureWebPush = () => {
    webpush.setVapidDetails(`mailto:${process.env.GMAIL_USER}`, publicVapidKey, privateVapidKey);
}

const configureMongo = () => {
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
}

const configureServer = () => {
    const port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);
    server = http.createServer(app);
    // const server = https.createServer(options, app);
    server.listen(port, () => {
        console.log(`Listening on ${port}`);
    });
    server.on('error', onError);
}



configureWebPush();
configureMongo();
configureServer();


function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;
  return false;
}

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