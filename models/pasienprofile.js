'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PasienProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PasienProfile.belongsTo(models.User,{foreignKey:'UserId'})
      PasienProfile.hasMany(models.CheckUp,{foreignKey:'PasienId'})
    }
  }
  PasienProfile.init({
    fullName: DataTypes.STRING,
    no_telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    medicHistory: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PasienProfile',
  });
  return PasienProfile;
};