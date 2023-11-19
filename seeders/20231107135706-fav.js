'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Favs', [
      {id: "fav001", user_id: "user001", movie_id: "movie001"},
      {id: "fav002", user_id: "user001", movie_id: "movie002"},
      {id: "fav003", user_id: "user001", movie_id: "movie004"},
      {id: "fav004", user_id: "user002", movie_id: "movie002"},
      {id: "fav005", user_id: "user002", movie_id: "movie003"},
      {id: "fav006", user_id: "user003", movie_id: "movie001"},
      {id: "fav007", user_id: "user003", movie_id: "movie003"},
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Favs', null, {});
  }
};
