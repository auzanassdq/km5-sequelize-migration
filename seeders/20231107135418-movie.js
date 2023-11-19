'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [
      { id:"movie001", title: "The Shawshank Redemption", year: 1994 },
      { id:"movie002", title: "The Godfather", year: 1972 },
      { id:"movie003", title: "Pulp Fiction", year: 1994 },
      { id:"movie004", title: "The Dark Knight", year: 2008 },
      { id:"movie005", title: "Forrest Gump", year: 1994 }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
