module.exports = (mongoose) => {
  var schema = new mongoose.Schema({}, { strict: false, timestamps: true });

  const Form = mongoose.model("location", schema);
  return Form;
};
