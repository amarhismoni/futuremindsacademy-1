const inquirer = require("@inquirer/prompts");

const users = {};

async function run() {
    const action = await inquirer.select({
        message: "Do you want to log in",
        choices: [
            { name: "login", value: "login" },
            { name: "register", value: "register" },
        ],
    });

    if (action === "register") {
        await register();
    } else if (action === "login") {
        await login();
    }
}

async function register() {
    const name = await inquirer.input({
        message: "Username:",
    });

    const password = await inquirer.password({
        message: "Password:",
        mask: true,
    });

    users[name] = password;
    console.log("registered");
}

run();
