'use strict';
const Sequelize= require("sequelize");
class Todo extends Sequelize.Model{
  static init(sequelize, DataTypes) {
    return super.init(
      {
        data: DataTypes.TEXT
      }, {sequelize}
    )
  }

  static associate(models){
    
  }
}
module.exports = Todo