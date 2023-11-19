const express = require("express");
const route = express.Router();
const { getAllMovie } = require("../controllers/movie-controller");


route.get("/", getAllMovie);

module.exports = route;
