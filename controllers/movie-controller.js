const bcrypt = require('bcrypt');
const {User, Movie} = require("../models");

module.exports = {
  getAllMovie: async (req, res) => {
    const movies = await Movie.findAll()

    res.json({
      message: "berhasil mendapatkan data movie",
      data: movies
    })
  },

}