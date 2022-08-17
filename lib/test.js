const { exec } = require("child_process");

const test = () => {
    exec('mocha', (error, stdout, stderr) => {
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