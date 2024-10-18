const express = require("express");

const app = express();

const mysql = require("mysql2");

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "rootc1",
    password: "",
    database: "school",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.stack);
        return;
    }
    console.log("Connected to MySQL");
});

app.post("/students", (req, res) => {
    const { name, age, grade } = req.body;
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});