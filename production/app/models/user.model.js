module.exports = (mongoose) => {
  var schema = new mongoose.Schema({}, { strict: false, timestamps: true });
  schema.set("toJSON", {
   
    versionKey: false,
    transform: function (doc, ret) {
     
      delete ret.password;
      delete ret.hash;
    },
  });
  const User = mongoose.model("user", schema);
  return User;
};
