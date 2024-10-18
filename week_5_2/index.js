const inquirer = require("@inquirer/prompts");

async function run() {

    let {name, password} = await getCredentials()
    
    if (name == "admin" && password == "admin") {
        console.log("hello");
    } else {
        console.log("wrong credentials");
    }
}

async function getCredentials(){
    const name = await inquirer.input({
        message: "name",
    });
    const password = await inquirer.password({
        message: "Password",
        mask: true,
    });
}

run();

//login register
// first register value(name, surname etc..)
//
