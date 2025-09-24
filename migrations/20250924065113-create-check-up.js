'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckUps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PasienId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'PasienProfiles',
        key: 'id'
        }
      },
      DoctorId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'DoctorProfiles',
        key: 'id'
        }
      },
      checkUpDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      patientComplain: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckUps');
  }
};