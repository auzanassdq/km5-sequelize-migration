'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favs', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING,
        // references: {
        //   model: 'Users',
        //   key: 'id'
        // },
      },
      movie_id: {
        type: Sequelize.STRING,
        // references: {
        //   model: 'Movies',
        //   key: 'id'
        // },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favs');
  }
};