'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckUpDiseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symtomps: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      DiseaseId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Diseases',
        key: 'id'
        }
      },
      CheckUpId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'CheckUps',
        key: 'id'
        }
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
    await queryInterface.dropTable('CheckUpDiseases');
  }
};