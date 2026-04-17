const mongoose = require("mongoose");


async function connectToDB() {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Server is connected to DB");
  })
  .catch(err => {
    console.log("Error in connecting to DB");
    process.exit(1);
  })
}

module.exports = connectToDB;