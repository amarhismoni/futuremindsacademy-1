const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;

    const menu = [
        { id: 1, name: "pizza" },
        { id: 2, name: "burger" },
        { id: 3, name: "cheeseburger" },
        { id: 4, name: "friedchicken" },
        { id: 5, name: "fries" },
    ];

    if (req.method === "GET" && pathname == "/api/menu") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Gell All food", menu }));
    } else if (req.method === "POST" && pathname === "/api/users") {
        console.log("Body", req);
        res.statusCode = 201;

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Create a new user" }));
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

// give me a simple server that can get a restaurant meny
