'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: "user001",
        name: "Auzan",
        email: "auzan@gmail.com",
        password: "123"
      },
      {
        id: "user002",
        name: "John",
        email: "john@example.com",
        password: "password123"
      },
      {
        id: "user003",
        name: "Mike",
        email: "mike@example.com",
        password: "mikeP@ss"
      },
      {
        id: "user004",
        name: "Linda",
        email: "linda@example.com",
        password: "linda12345"
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
