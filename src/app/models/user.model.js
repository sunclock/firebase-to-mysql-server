module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      age: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      withdraw: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };