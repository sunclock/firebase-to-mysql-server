const db = require("../models");
const Recommendation = db.recommendations;
const Op = db.Sequelize.Op;

// Create and Save a new recommendation
exports.create = (req, res) => {

  // Create a recommendation
  const recommendation = {
      recommendation_id: req.body.recommendation_id,
      age: req.body.age,
      sex: req.body.sex,
      job: req.body.job,
      ventilation: req.body.ventilation,
      spacing: req.body.spacing, 
      quietness: req.body.quietness,
      server: req.body.server,
      reuse: req.body.reuse,
      cutlery: req.body.cutlery,
      shield: req.body.shield,
      kitchen: req.body.kitchen,
      sanitizer: req.body.sanitizer,
      cleanliness: req.body.cleanliness,
      water: req.body.water,
      hall: req.body.hall,
      dispenser: req.body.dispenser,
  };
  console.log(recommendation);
  // Save recommendation in the database
  console.log(Recommendation);
  Recommendation.create(recommendation)
    .then(data => {
      return res.send(data);
    })
    .catch(data => {
      return res.status(500).send({
        message:
          data.message || "Some error occurred while creating the recommendation."
      });
    });
};