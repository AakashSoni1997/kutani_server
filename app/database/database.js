const mongoose = require("mongoose");

const dotenv = require("dotenv");

const pankajDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)

    .then(() => {
      console.log("Server is connected to mongoDB atlas");
    })
    .catch((err) => {
      console.log(err);
    });
};

mongoose.set("strictQuery", false);

module.exports = pankajDB;
