const { ServerError } = require('../helpers/utils/error');
const jwt = require('jsonwebtoken');
const util = require('util');

const averify = util.promisify(jwt.verify);

const SECRET = process.env.JWT_SECRET;
const admin = process.env.ADMIN_SECRET;
const env = process.env.NODE_ENV;

const login = (req, res, next) => {
    const { mail } = req.body;
    const token = jwt.sign({
        mail: `${mail}`,
        roles: ['user'] 
    }, SECRET, { expiresIn: "1d" });
    res.locals.token = token;
    next();
}

const isAdmin = (req, res, next) => {
    const auth = req.header('auth');
    if(auth === admin || env === 'dev') return next();
    throw new ServerError(401, 'Unauthorized');
};

const isAllowed = async (req, res, next) => {
    const auth = req.header('auth');
    if(auth === admin || env === 'dev') return next();

    try {
        const payload = await averify(auth, SECRET).catch(() => { throw new ServerError(401, 'Unauthorized') });
        res.locals.payload = payload;
        next();
    }
    catch(err) {
        next(err);
    }
};

const cheatTest = (req, res, next) => {
    const auth = req.header('auth');
    if (auth === admin || env === 'dev') return next();

    const mail = req.params.mail;
    if(res.locals.payload.mail != mail ) throw new ServerError(401, 'Unauthorized');
    next();
};

// && env != 'dev'

module.exports = { isAdmin, isAllowed, cheatTest, login }