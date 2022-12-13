const jwt = require("jsonwebtoken");
require('dotenv').config();


function jwtGenerator(id) {
    const payload = {
        user: id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})
}


function jwtDecode(token) {
    const stringToken = token.toString();
    const base64Url = stringToken.split('.')[1];
    const decodedValue = JSON.parse(Buffer.from(base64Url, 'base64'));
    return decodedValue;
}

module.exports = {
    jwtGenerator,
    jwtDecode,
};