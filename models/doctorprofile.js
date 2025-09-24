'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorProfile
   extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
          DoctorProfile.belongsTo(models.User,{foreignKey:'UserId'})
          DoctorProfile.hasMany(models.CheckUp,{foreignKey:'DoctorId'})
    }
  }
  DoctorProfile
  .init({
    fullName: DataTypes.STRING,
    no_telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    specialist: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DoctorProfile',
  });
  return DoctorProfile;
};