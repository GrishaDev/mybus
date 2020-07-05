const util = require('util');
const jwt = require('jsonwebtoken');

const averify = util.promisify(jwt.verify);

module.exports = { averify }
