const Sequelize = require('sequelize');

module.exports = new Sequelize('burger_db','root','Seamen42.', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})