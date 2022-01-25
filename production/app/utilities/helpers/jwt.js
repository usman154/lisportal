const expressJwt = require("express-jwt");
const userService = require("../../services/user.service");
const config = require("../../config/settings.config");
module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    credentialsRequired: true,
    requestProperty: "userInfo",
    getTokenFromHeaders,
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/authenticate",
      "/api/users/register",
    ],
  });
}

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;
  if (authorization && authorization.split(' ')[0] === 'Token') {
      return authorization.split(' ')[1];
  }
  return null;
};