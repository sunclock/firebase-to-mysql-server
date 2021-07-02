module.exports = app => {
    const recommendations = require("../controllers/recommendation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", recommendations.create);
  
    // // Retrieve all recommendations
    // router.get("/", recommendations.findAll);
  
    // // Retrieve all published recommendations
    // router.get("/published", recommendations.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", recommendations.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", recommendations.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", recommendations.delete);
  
    // // Delete all recommendations
    // router.delete("/", recommendations.deleteAll);
  
    app.use("/api/recommendations", router);
  };