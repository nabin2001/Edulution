const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/edulution", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ DB Connection Success (Local MongoDB)");
    })
    .catch((err) => {
      console.log("❌ DB Connection Failed");
      console.log(err);
      process.exit(1);
    });
};
