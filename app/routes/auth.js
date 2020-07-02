const { ServerError } = require('../helpers/utils/error');


const correctAuth = process.env.AUTH;
const env = process.env.NODE_ENV;

const isAdmin = (req, res, next) => {
    const auth = req.header('auth');
    if(auth != correctAuth && env != 'dev') throw new ServerError(401, 'Unauthorized');
    next(); 
};

module.exports = { isAdmin }