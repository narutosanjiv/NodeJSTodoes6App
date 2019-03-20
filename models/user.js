'use strict';
const Sequelize= require("sequelize");
class User extends Sequelize.Model{
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        encrypted_password: DataTypes.TEXT,
        gender: DataTypes.STRING
      }, {sequelize}
    )
  }
}

module.exports = User