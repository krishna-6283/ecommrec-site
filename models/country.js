const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Country = sequelize.define('Country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, );

module.exports = Country;

