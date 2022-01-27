module.exports = (app) => {
  // IMPORTING THE USER MODEL
  const user = require("../controllers/user.controller");

  //   BACKEND DATABASE ROUTES
  var router = require("express").Router();
  router.post("/user/create", (req, res) => {
    user.create(req, res);
  });
  // router.post("/user/login", user.login);

  // This is Ben trying things out
  app
    .route("/user")
    .get((req, res) => {})
    .post((req, res) => {});

  //   VIEW ROUTE
  app.use("/", router);
};
