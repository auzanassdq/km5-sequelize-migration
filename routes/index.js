const express = require('express');
const route = express.Router()

const userRoutes = require("./user-route.js")
const movieRoutes = require("./movie-route.js")
const favRoutes = require("./fav-route.js")



route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di express sequelize"
  })
})

route.use("/users", userRoutes)
route.use("/movies", movieRoutes)
route.use("/favs", favRoutes)

module.exports = route