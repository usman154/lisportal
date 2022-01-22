const db = require("../models");
const Form = db.form;
const generateReport = require("../../generateReport.js");
const EmailSender = require('../utilities/notification.service.js');
const utils = require('../utilities/libs/utils');
const SIZE_ORDER_ID = 10;

// Create and Save a new form
exports.create = (req, res) => {
  const data = JSON.parse(req.body.rawRequest);

  const mappedData = Object.keys(data).reduce((acc, curr) => {
    const updatedKey = curr.split("_").slice(1).join("_");
    acc[updatedKey ? updatedKey : data[curr]] = data[curr];
    return acc;
  }, {});
  // Create a form
  mappedData.report_status = "pending";
  mappedData.order_id = `MK-${new Date().valueOf()}`
  const form = new Form(mappedData);

  // Save form in the database
  form
    .save(form)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the form.",
      });
    });
};

// Retrieve all forms from the database.
exports.findAll = (req, res) => {

  const { page, size, title } = req.query;
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);
  ///
  const filter = req.query.filter;

  let query = {};
  if (filter != "all") {
    query = { report_status: filter };
  }

  Form.find(query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving forms.",
      });
    });
};

// Find a single form with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Form.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found form with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving form with id=" + id });
    });
};

// Update a form by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  delete req.body._id;
  Form.findOneAndUpdate({_id: id}, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update form with id=${id}. Maybe form was not found!`,
        });
      } else res.send({ message: "form was updated successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error updating form with id=" + id,
      });
    });
};

// Delete a form with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Form.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete form with id=${id}. Maybe form was not found!`,
        });
      } else {
        res.send({
          message: "form was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete form with id=" + id,
      });
    });
};

// Delete all forms from the database.
exports.deleteAll = (req, res) => {
  Form.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} forms were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all forms.",
      });
    });
};

// Find all published forms
exports.findAllPublished = (req, res) => {
  Form.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving forms.",
      });
    });
};
exports.emailReport = async (req, res) => {
  let contact = req.body.contact;
  //contact = await Form.find({_id: contact._id}).lean();
  const file = await generateReport(contact);
  await EmailSender(contact, file);
  res.send({message: 'Email send successfully'})
};
