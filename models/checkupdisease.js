'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckUpDisease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CheckUpDisease.belongsTo(models.Disease, { foreignKey: 'DiseaseId' });
    }
  }
  CheckUpDisease.init({
    symtomps: DataTypes.STRING,
    description: DataTypes.STRING,
    DiseaseId: DataTypes.INTEGER,
    CheckUpId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CheckUpDisease',
  });
  return CheckUpDisease;
};