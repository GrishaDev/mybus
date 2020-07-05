const { ServerError } = require('../helpers/utils/error');
const jwt = require('jsonwebtoken');
const util = require('util');

const averify = util.promisify(jwt.verify);

const SECRET = process.env.JWT_SECRET;


const correctAuth = process.env.AUTH;
const env = process.env.NODE_ENV;

const isAdmin = (req, res, next) => {
    const auth = req.header('auth');
    if(auth != correctAuth) throw new ServerError(401, 'Unauthorized');
    next(); 
};

const isAllowed = async (req, res, next) => {
    const auth = req.header('auth');
    if(auth === correctAuth) return next();

    try {
        const payload = await averify(auth, SECRET).catch(() => { throw new ServerError(401, 'Unauthorized') });
        res.locals.payload = payload;
        // res.set('mail', String(payload.mail));
        next();
    }
    catch(err) {
        next(err);
    }
};

const cheatTest = (req, res, next) => {
    const auth = req.header('auth');
    if (auth === correctAuth) return next();

    const mail = req.params.mail;
    if(res.locals.payload.mail != mail ) throw new ServerError(401, 'Unauthorized');
    next();
};

// && env != 'dev'

module.exports = { isAdmin, isAllowed, cheatTest }