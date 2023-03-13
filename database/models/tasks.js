"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
      selesai: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "tasks",
    }
  );
  return tasks;
};
