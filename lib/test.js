const { exec } = require("child_process");

//TODO: Switch to jest
const test = () => {
    exec('npm run test', (error, stdout, stderr) => {
        if (error) {
            console.log(`ERROR: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`STDERR: ${stderr}`);
        }
        console.log("OK");
    })
}

module.exports = { test }