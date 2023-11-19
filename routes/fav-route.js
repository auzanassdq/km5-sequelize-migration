const express = require("express");
const route = express.Router();
const { getAllFav } = require("../controllers/fav-controller");



route.get("/", getAllFav);


module.exports = route;
