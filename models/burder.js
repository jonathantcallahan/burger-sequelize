const Sequelize = require('sequelize');

const sqlConnection = require('../config/connection');

const Burgers = sqlConnection.define('burgers', {
    name: Sequelize.STRING,
    eaten: Sequelize.BOOLEAN
}, {
    timestamps: false
});

Burgers.sync()

module.exports = Burgers;