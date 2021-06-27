module.exports = (sequelize, Sequelize) => {
    const Tester = sequelize.define("tester", {
      age: {
        type: Sequelize.STRING
      },
      tester_id: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.STRING
      },
      register_date: {
        type: Sequelize.INTEGER
      },
      job: {
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      soul_food: {
        type: Sequelize.STRING
      }
    });
  
    return Tester;
  };