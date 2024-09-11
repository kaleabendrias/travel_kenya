const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = async (req, res, next) => {
  try {
    let token = req.cookies.session;

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized!" });
  }
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).send({ message: "Require Admin Role!" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }

    res.status(403).send({ message: "Require Moderator Role!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

verifySignin = async (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  try{
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).send({ message: "Unauthorized user!" });
  }
}

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  verifySignin
};
module.exports = authJwt;
