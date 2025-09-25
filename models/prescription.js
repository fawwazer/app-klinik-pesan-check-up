'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prescription.belongsToMany(models.Medicene, { through: models.PrescriptionMedicene, foreignKey: 'PrescriptionId' });
      Prescription.belongsTo(models.CheckUp, { foreignKey: 'CheckUpId' })
    }
  }
  Prescription.init({
    CheckUpId: DataTypes.INTEGER,
    instruction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};