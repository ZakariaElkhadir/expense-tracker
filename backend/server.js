const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = 5000;

//Middleware
app.use(express.json());

//Connect with mongodb
mongoose.connect(
  'mongodb://admin:admin@localhost:27017/expence-tracker?authSource=admin'
);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection error");
});

db.once("open", () => {
  console.log("Connected to DB!");
});
app.use('/api', authRoutes);
app.listen(port, () => {
  console.log("Server started on port", port);
});