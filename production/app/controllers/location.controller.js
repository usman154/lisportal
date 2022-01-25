const db = require("../models");
const Location = db.location;

exports.getAll = async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
};
exports.update = async (req, res) => {
  const lcoation = await Location.find({ _id: req.params.id }, req.body, {
    new: true,
  });
  lcoation.save();
  res.json(lcoation);
};
exports.create = async (req, res) => {
  const location = new Location(req.body);
  location.save();
  res.json(location);
};
exports._delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: "Location record deleted" });
};
exports.create;
