const fs = require("fs").promises;
const path = require("path");

async function run() {
    try {
        fs.unlink('teksi.txt')
        // fs.writeFile('teksi.txt', 'sfj')
        // const data = await fs.readFile("tekst.txt");
        // console.log(data.toString);
    } catch (err) {
        console.log(err);
    }
}

run();
