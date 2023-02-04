const mongoose = require("mongoose");

const dotenv = require("dotenv");

const pankajDB = () => {
  mongoose
    .connect(`mongodb+srv://aakash1997:Aakash1997@cluster0.jus37el.mongodb.net/test`)

    .then(() => {
      console.log("Server is connected to mongoDB atlas");
    })
    .catch((err) => {
      console.log(err);
    });
};

mongoose.set("strictQuery", false);

module.exports = pankajDB;
