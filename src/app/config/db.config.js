module.exports = {
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB: "SOUL_FOOD_TEST",
    dialect: "mysql",
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };