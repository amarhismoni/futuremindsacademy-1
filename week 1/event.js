const eventEmitter = require("events");

const fs = require("fs");

const myEmiter = new eventEmitter();

function writeFile(title, data) {
    fs.writeFileSync(`${title}.txt`, data, "utf8", (err) => {
        if (err) {
            console.log("not working");
            return;
        }

        console.log("file written successfully");
    });
}

myEmiter.on("createFile", ()=>{
    console.log("We are creating a file");
    writeFile("bota", "rrotullohet rreth diellit")
})

myEmiter.emit("createFile");