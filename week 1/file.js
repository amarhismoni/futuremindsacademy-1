const fs = require("fs");


const data = "Hello world";

fs.writeFileSync("example.txt", data, 'utf8', (error)=>{
    if(err){
        console.log("not working");
        return;
    }

    console.log("file written successfully");
});

