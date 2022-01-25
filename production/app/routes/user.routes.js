module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const authHelper = require("../utilities/helpers/auth.helper");
  var router = require("express").Router();

  router.post("/authenticate", users.authenticate);
  router.post("/register", authHelper.isSuperAdmin, users.register);
  router.get("/", authHelper.isSuperAdmin, users.getAll);
  router.get("/current", authHelper.isSuperAdmin, users.getCurrent);
  router.get("/:id", authHelper.isSuperAdmin, users.getById);
  router.put("/:id", authHelper.isSuperAdmin, users.update);
  router.delete("/:id", authHelper.isSuperAdmin, users._delete);

  app.use("/api/users", router);
};
