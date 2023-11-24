const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);

  app.get("/api/map", authJwt.verifyToken, (req, res) => {
    
    res.status(200).json({ message: "Protected route accessed successfully!" });
  });

  app.get('/checkToken', verifyToken, (req, res) => {
  res.sendStatus(200);
});
};
