const Cookies = require( "cookies" );
const JsonWebToken = require("jsonwebtoken");
const SECRET_JWT_CODE = "5fa4b7ed3f99620da6cc6e95d73bc1784af801c2";

function fetchUserByToken(req, res, next) {
  let token = (new Cookies(req,res)).get('access_token');
  
  if (token == null) return res.sendStatus(401);

  JsonWebToken.verify(token, SECRET_JWT_CODE, (err, dataJwt) => { 
    if(err) return res.sendStatus(403);
    next();
  });
}

module.exports = { fetchUserByToken }