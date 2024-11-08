const express = require("express");
const app = express();
const authController = require("./controllers/authController");

app.use("/auth", authController);
app.use(express.json());

app.listen(8585);
