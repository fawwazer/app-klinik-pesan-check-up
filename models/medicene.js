'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicene.belongsToMany(Prescription, { through: PrescriptionMedicene, foreignKey: 'MediceneId' });
    }
  }
  Medicene.init({
    name: DataTypes.STRING,
    descriptions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicene',
  });
  return Medicene;
};