const express = require('express')
const cors = require('cors')
const bookController = require('./controllers/bookController')
const authController = require("./controllers/authController");
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    preflightContinue: true,
}))

app.use('/books', bookController)
app.use("/auth", authController);

app.listen(8585);