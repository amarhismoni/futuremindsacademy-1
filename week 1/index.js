const http = require("http");

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Contet-Type', 'tex/plain');
    res.end('Hello world!');
}); 


server.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});