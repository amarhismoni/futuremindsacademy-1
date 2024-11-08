const express = require("express");
const app = express();
const { printMethod, printURL } = require("./middleware");

app.use(printMethod);
app.use(printURL)

app.get("/", (req, res) => {
    res.end();
});

app.listen(8585);