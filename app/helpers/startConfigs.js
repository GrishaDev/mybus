const mongoose = require('mongoose');
const webpush = require('web-push');

const publicVapidKey = process.env.VAPID_PUBLIC;
const privateVapidKey = process.env.VAPID_PRIVATE;
const env = process.env.NODE_ENV.trim();
const prod = process.env.DB_URL_PROD;
const test = process.env.DB_URL_TEST;
const dev = process.env.DB_URL;

console.log(`${env} environment.`);

// ======================================


// configures webpush notifications
const configureWebPush = () => {
    webpush.setVapidDetails(`mailto:${process.env.GMAIL_USER}`, publicVapidKey, privateVapidKey);
}

// configures mongo connection
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

// does some shit for port
const normalizePort = (val) => {
    let port = parseInt(val, 10);
  
    if (isNaN(port)) return val;
  
    if (port >= 0) return port;
    return false;
}

module.exports = { configureWebPush, configureMongo, normalizePort };