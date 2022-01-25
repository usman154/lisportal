const db = require("../models");
const Form = db.form;
const generateReport = require("../../generateReport.js");
const EmailSender = require("../utilities/notification.service.js");
const utils = require("../utilities/libs/utils");

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
  mappedData.order_id = `MK-${new Date().valueOf()}`;
  const time = utils.convertTime12to24(
    mappedData.collection_time.timeInput + " " + mappedData.collection_time.ampm
  );
  const date = new Date(
    mappedData.collection_date.year,
    mappedData.collection_date.month - 1,
    mappedData.collection_date.day,
    time.hours,
    time.minutes
  );
  mappedData.collectionTimeStamp = date;
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
  const { page, size, name, filter, start, end } = req.query;
  const condition = name
    ? { first_name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  
  const { limit, offset } = utils.getPagination(page, size);
  if (filter != "all" && filter !='positive' && filter !='negative') {
    condition.report_status = filter;
  }
  if(filter == 'positive' || filter == 'negative'){
    condition['test_result'] = filter;
  }
  if (start && end) {
    let endofDay = new Date(end);
    endofDay.setHours(23, 59, 59);
    condition["collection_timeStamp"] = {
      $gte: new Date(start),
      $lte: endofDay,
    };
  }
  if(req.userInfo && req.userInfo.email !='admin@mkcovid19.com'){
    condition['location'] = req.userInfo.location;
  }

  Form.paginate(condition, { offset, limit })
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
  Form.findOneAndUpdate({ _id: id }, req.body, { new: true })
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

 
exports.emailReport = async (req, res) => {
  let contact = req.body.contact;
  //contact = await Form.find({_id: contact._id}).lean();
  const file = await generateReport(contact);
  await EmailSender(contact, file);
  res.send({message: 'Email send successfully'})
};
