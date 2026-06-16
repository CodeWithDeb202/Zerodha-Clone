const jwt = require("jsonwebtoken");

const createSecretToken = (id) => {
  // TOKEN_KEY should be present in backend/.env for real auth security.
  const tokenKey = process.env.TOKEN_KEY || "zerodha_clone_dev_secret";

  return jwt.sign({ id }, tokenKey, {
    expiresIn: "3d",
  });
};

module.exports = { createSecretToken };
