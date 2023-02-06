const express = require("express");
const { homeController } = require("../controller/homeController");

const homerouter = express.Router();

homerouter.route("/homepage").post(homeController);

module.exports = homerouter;
