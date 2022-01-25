const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const jwt = require("./app/utilities/helpers/jwt");
const app = express();
const Logger = require("./app/config/logger.config");
app.use(cors());
app.use(express.static("public"));
// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

app.use(jwt());
//Logger Configuration
Logger.configureLogger(app);
// Error catching
app.use(function (err, req, res, next) {
  if (req.body) {
    Logger.error(req.body);
  }
  Logger.error(err);
  res.status(500);
  if (err.name === "UnauthorizedError") {
    res.json({message: "Credentials verification failed"});
    
  } else res.json(err);
});
// use JWT auth to secure the api

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route


require("./app/routes/form.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/location.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
