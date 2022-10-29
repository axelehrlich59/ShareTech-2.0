const Cookies = require( "cookies" );
const JsonWebToken = require("jsonwebtoken");
require('dotenv').config()

function fetchUserByToken(req, res, next) {
  let token = (new Cookies(req,res)).get('access_token');
  
  if (token == null) return res.sendStatus(401);

  JsonWebToken.verify(token, process.env.SECRET_JWT_CODE, (err, dataJwt) => { 
    if(err) return res.sendStatus(403);
    next();
  });
}

module.exports = { fetchUserByToken }