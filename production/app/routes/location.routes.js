module.exports = (app) => {
    const locations = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
  
     
    router.get('/', locations.getAll);
    router.put('/:id', locations.update);
    router.post('/', locations.create);
    router.delete('/:id', locations._delete);
   
    app.use("/api/locations", router);
  };
  