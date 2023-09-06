"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init(
    {
      set_time_id: DataTypes.INTEGER,
      stage_id: DataTypes.SMALLINT,
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Set_time",
      tableName: "set_times",
      timestamps: false,
    }
  );
  return Set_time;
};
