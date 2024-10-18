const express = require("express");
const mysql = require("mysql2");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());

// const token = jwt.sign({ userId: 123 }, "secretKey", { expiresIn: "1h" });
// console.log("JWT Token:", token);
// // Verifying the token
// const decoded = jwt.verify(token, "secretKey");
// console.log("Decoded Token:", decoded);

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amarhismoni2012",
    database: "auth_module",
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = "INSERT INTO users (username,password,role_id) VALUES (?,?,?)";
    connection.query(query, [username, hashedPassword, 2], (err, result) => {
        if (err) {
            return res.status(500).send(err); // Change sendStatus to status and send the error in the body
        }

        const token = jwt.sign({ userId: result.insertId }, "fma", {
            expiresIn: "1h",
        });

        return res.status(201).json({ token });
    });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const query = "Select * FROM users WHERE username = ?";
    let user;
    connection.query(query, [username], async (err, result) => {
        if (err) {
            return res.status(500).send(err); // Change sendStatus to status and send the error in the body
        }
        if (result) {
            console.log("result", result);
            user = result[0];
            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(401).send("Invalid credentials");
            }

            const token = jwt.sign({ userId: user.id }, "fma", { expiresIn: "1h" });
            return res.status(201).json({ token });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
