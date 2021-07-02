module.exports = app => {
    const keywords = require("../controllers/keyword.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", keywords.create);
  
    // // Retrieve all keywords
    // router.get("/", keywords.findAll);
  
    // // Retrieve all published keywords
    // router.get("/published", keywords.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", keywords.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", keywords.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", keywords.delete);
  
    // // Delete all keywords
    // router.delete("/", keywords.deleteAll);
  
    app.use("/api/keywords", router);
  };