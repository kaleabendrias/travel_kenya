const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const { authJwt } = require("../middlewares");
const passport = require("passport");
const express = require("express");
const { verifyToken } = require("../middlewares/authJwt");
const router = express.Router();

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);

  app.get("/api/map", authJwt.verifyToken, (req, res) => {
    res.status(200).json({ message: "Protected route accessed successfully!" });
  });

  app.get("/checkToken", verifyToken, (req, res) => {
    res.sendStatus(200);
  });
  app.get(
    "/login",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/signin",
    }),
    (req, res) => {
      req.session.user = req.user;
      res.cookie("session", req.user);
      console.log(req.session.user)
      return res.redirect("https://travel-kenya-mauve.vercel.app/");
    }
  );

  app.get("/verify", controller.verifyTokenEmail);

  app.post("/api/auth/forgot-password", controller.forgotPassword);
  app.get("/reset-password", controller.emailTokenForgot);
  app.post("/api/auth/updatePassword", controller.updatePassword);
};
