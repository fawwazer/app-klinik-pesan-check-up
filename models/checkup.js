'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CheckUp.belongsTo(models.PasienProfile,{foreignKey:'PasienId'})
      CheckUp.hasMany(models.CheckUpDisease, { foreignKey: 'CheckUpId' })
      CheckUp.hasOne(models.Prescription, { foreignKey: 'CheckUpId' });
    }
  }
  CheckUp.init({
    PasienId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER,
    checkUpDate: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    patientComplain: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CheckUp',
  });
  return CheckUp;
};