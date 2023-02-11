const express = require("express");
const { homeController, getAllImage, deleteImage } = require("../controller/homeController");

const homerouter = express.Router();

homerouter.route("/homepage").post(homeController);
homerouter.route("/getimage").get(getAllImage)
homerouter.route("/deleteimage/:id").delete(deleteImage)

module.exports = homerouter;
