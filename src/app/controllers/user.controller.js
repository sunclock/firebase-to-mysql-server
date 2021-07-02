const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {

  // Create a user
  const user = {
      age: req.body.age,
      username: req.body.username,
      email: req.body.email,
      job: req.body.job,
      sex: req.body.sex,
      withdraw: req.body.withdraw
  };
  console.log(user);
  // Save User in the database
  console.log(User);
  User.create(user)
    .then(data => {
      return res.send(data);
    })
    .catch(data => {
      return res.status(500).send({
        message:
          data.message || "Some error occurred while creating the User."
      });
    });
};


// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
    return res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};
 