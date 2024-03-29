module.exports = (app) => {
  // IMPORTING THE USER MODEL
  const user = require("../controllers/user.controller");
  //   BACKEND DATABASE ROUTES
  var router = require("express").Router();

  router.post("/user/create", (req, res) => {
    user.create(req, res);
  });
  router.delete("/user/delete", (req, res) => {
    user.destroy(req, res);
  });
  router.get("/user/findAll", (req, res) => {
    user.findAll(req, res);
  });
  router.get("/user/getUser", (req, res) => {
    user.getUser(req, res);
  });

  router.get("/user/findOne", (req, res) => {
    user.findOne(req, res);
  });
  // // This is Ben trying things out
  // app
  //   .route("/user")
  //   .get((req, res) => {})
  //   .post((req, res) => {});
  //   VIEW ROUTE
  app.use("/", router);
};
