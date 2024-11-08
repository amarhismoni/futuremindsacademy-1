const express = require("express");
const calculatorController = require("./controller/calculatorController");
const app = express();

app.use("/calculator", calculatorController);

app.listen(8585);
