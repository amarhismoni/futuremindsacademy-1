const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/teksti.txt") {
        const file = fs.readFile("teksti.txt", (err, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;
    }
});

server.listen(3006);
