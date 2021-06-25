const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {

  // Create a User
  const user = {
      age: req.body.age,
      user_id: req.body.user_id,
      keyword: req.body.keyword,
      register_date: req.body.register_date,
      job: req.body.job,
      response: req.body.response,
      sex: req.body.sex,
      soul_food: req.body.soul_food
  };
  console.log(user);
  // Save Tutorial in the database
  console.log(User);
  User.create(user)
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