const fs = require("fs");
const path = require("path");
const eventEmitter = require("events");

const myEmiter = new eventEmitter();

const fileContent = "i love alot of stuff";

const filePath = path.join(__dirname, "amar.txt");

fs.writeFileSync(filePath, fileContent, "utf8", (err) => {
    if (err) {
        console.log("not working");
        return;
    }
});

myEmiter.on("consolePath", () => {
    console.log(`File created at ${filePath}`);
    console.log(`File content is : ${fileContent}`)
});

myEmiter.emit("consolePath");
