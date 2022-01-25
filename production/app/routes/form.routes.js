const multer = require("multer");
const multipart = multer();
module.exports = (app) => {
  const forms = require("../controllers/form.controller.js");

  var router = require("express").Router();

  // Create a new form
  router.post("/webhook", multipart.array(), forms.create);

  // Retrieve all forms
  router.get("/", forms.findAll);

 

  // Retrieve a single form with id
  router.get("/:id", forms.findOne);

  // Update a form with id
  router.put("/:id", forms.update);

  // Delete a form with id
  router.delete("/:id", forms.delete);

  // // delete multiple forms
  // router.delete("/", forms.deleteAll);
  // Email Report
  router.post("/emailReport", forms.emailReport);
 // Date range
 
  app.use("/api/forms", router);
};
