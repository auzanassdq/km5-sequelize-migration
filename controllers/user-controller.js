const bcrypt = require('bcrypt');
const {User, Movie, Fav} = require("../models");

module.exports = {
  getAllUser : async (req, res) => {
    const users = await User.findAll({
      include: [
        {
          model: Movie,
          attributes: ["title", "year"],
        }
      ],
      attributes: {
        exclude: ["password"]
      }
    })

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById : async (req, res) => {
    const {id } = req.params
    const user = await User.findByPk(id)
    const fav = await user.getMovies({attributes: ["id", "title"]})

    res.json({
      message: "berhasil mendapatkan data user",
      user,
      fav
    })
  },

  createUser : async (req, res) => {
    let data = req.body

    try {
      // hash password
      const hashPassword = bcrypt.hashSync(data.password, 10)
      data.password = hashPassword

      // input data
      await User.create(data)

      // send response
      res.status(201).json({
        message: "berhasil menambahkan user"
      })
      
    } catch {
      res.json({
        message: "gagal menambahkan user"
      })
    }
  },
}