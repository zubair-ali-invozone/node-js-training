const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-database', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: '8889'
});

module.exports = sequelize;