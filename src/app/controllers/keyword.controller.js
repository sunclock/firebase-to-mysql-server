const db = require("../models");
const Keyword = db.keywords;
const Op = db.Sequelize.Op;

// Create and Save a new keyword
exports.create = (req, res) => {

  // Create a keyword
  const keyword = {
      reccomendation_id: req.body.reccomendation_id,
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
  console.log(keyword);
  // Save keyword in the database
  console.log(Keyword);
  Keyword.create(keyword)
    .then(data => {
      return res.send(data);
    })
    .catch(data => {
      return res.status(500).send({
        message:
          data.message || "Some error occurred while creating the Keyword."
      });
    });
};