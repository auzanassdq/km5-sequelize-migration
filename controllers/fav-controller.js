const bcrypt = require("bcrypt");
const { User, Movie, Fav } = require("../models");

module.exports = {
  getAllFav: async (req, res) => {
    const favs = await Fav.findAll({ includes: [{ model: User }, { model: Movie }] });

    res.json({
      message: "berhasil mendapatkan data fav",
      data: favs,
    });
  },
};
