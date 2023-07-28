const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_KEY);
    console.log(
      "Successfully connected to mongodb database:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
