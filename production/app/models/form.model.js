
module.exports = (mongoose, mongoosePaginate) => {
  var schema = new mongoose.Schema({}, { strict: false, timestamps: true });

  schema.plugin(mongoosePaginate);
  const Form = mongoose.model("form", schema);
  return Form;
};
