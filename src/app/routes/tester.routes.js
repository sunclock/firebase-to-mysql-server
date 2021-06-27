module.exports = app => {
    const testers = require("../controllers/tester.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", testers.create);
  
    // // Retrieve all testers
    // router.get("/", testers.findAll);
  
    // // Retrieve all published testers
    // router.get("/published", testers.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", testers.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", testers.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", testers.delete);
  
    // // Delete all testers
    // router.delete("/", testers.deleteAll);
  
    app.use("/api/testers", router);
  };