module.exports = (sequelize, Sequelize) => {
    const Recommendation = sequelize.define("recommendation", {
      recommendation_id: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      ventilation: {
        type: Sequelize.BOOLEAN
      },
      spacing: {
        type: Sequelize.BOOLEAN
      },
      quietness: {
        type: Sequelize.BOOLEAN
      },
      server: {
        type: Sequelize.BOOLEAN
      },
      reuse: {
        type: Sequelize.BOOLEAN
      },
      cutlery: {
        type: Sequelize.BOOLEAN
      },
      shield: {
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      sanitizer: {
        type: Sequelize.BOOLEAN
      },
      cleanliness: {
        type: Sequelize.BOOLEAN
      },
      water: {
        type: Sequelize.BOOLEAN
      },
      hall: {
        type: Sequelize.BOOLEAN
      },
      dispenser: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Recommendation;
  };