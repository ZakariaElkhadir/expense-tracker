import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 5000;

//Middleware
app.use(express.json());

//Connect with mongodb
mongoose.connect(process.env.MONGO_URI || 'mongodb://admin:admin@localhost:27017/expence-tracker?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection error");
});

db.once("open", () => {
  console.log("Connected to DB!");
});

app.listen(port, () => {
  console.log("Server started on port", port);
});