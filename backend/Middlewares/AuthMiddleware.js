const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

const userVerification = async (req, res) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token found" });
  }

  try {
    const tokenKey = process.env.TOKEN_KEY || "zerodha_clone_dev_secret";
    const decoded = jwt.verify(token, tokenKey);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    return res.json({ status: true, user });
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};

module.exports = { userVerification };
