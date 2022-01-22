const multer = require("multer");
const multipart = multer();
module.exports = (app) => {
  const forms = require("../controllers/form.controller.js");

  var router = require("express").Router();

  // Create a new form
  router.post("/webhook", multipart.array(), forms.create);

  // Retrieve all forms
  router.get("/", forms.findAll);

  // Retrieve all published forms
  router.get("/published", forms.findAllPublished);

  // Retrieve a single form with id
  router.get("/:id", forms.findOne);

  // Update a form with id
  router.put("/:id", forms.update);

  // Delete a form with id
  router.delete("/:id", forms.delete);

  // Create a new form
  router.delete("/", forms.deleteAll);
  // Email Report
  router.post("/emailReport", forms.emailReport);

  app.use("/api/forms", router);
};
