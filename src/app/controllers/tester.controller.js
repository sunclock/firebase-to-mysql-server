const db = require("../models");
const Tester = db.testers;
const Op = db.Sequelize.Op;

// Create and Save a new tester
exports.create = (req, res) => {

  // Create a tester
  const tester = {
      age: req.body.age,
      tester_id: req.body.tester_id,
      keyword: req.body.keyword,
      register_date: req.body.register_date,
      job: req.body.job,
      response: req.body.response,
      sex: req.body.sex,
      soul_food: req.body.soul_food
  };
  console.log(tester);
  // Save Tutorial in the database
  console.log(Tester);
  Tester.create(tester)
    .then(data => {
      return res.send(data);
    })
    .catch(data => {
      return res.status(500).send({
        message:
          data.message || "Some error occurred while creating the Tutorial."
      });
    });
};