module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Burgers', {
        name: Sequelize.STRING,
        eaten: Sequelize.TINYINT
    })
}