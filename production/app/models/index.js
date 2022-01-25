const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.form = require("./form.model.js")(mongoose, mongoosePaginate);
db.user = require("./user.model.js")(mongoose);
db.location = require("./location.model.js")(mongoose);

module.exports = db;
