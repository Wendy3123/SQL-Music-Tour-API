"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greet.init(
    {
      meet_greet_id: DataTypes.INTEGER,
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Meet_greet",
      tableName: "meet_greets",
      timestamps: false,
    }
  );
  return Meet_greet;
};
