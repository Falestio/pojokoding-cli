const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require('chalk')
const { exec } = require("child_process");

const packageJson = `
{
    "name": "pojokoding-cli",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {},
    "author": "Username user",
    "license": "ISC",
    "dependencies": {},
    "devDependencies": {
        "chai": "^4.3.6",
        "mocha": "^10.0.0"
    }
}
`

const panduan = "Ini adalah file panduan"

const setup = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "kursus",
                message: "Pilih Kursus",
                choices: [
                    {
                        name: "Javascript",
                        value: "javascript",
                    },
                    {
                        name: "HTML & CSS",
                        value: "htmlcss",
                    },
                ], 
            },
        ])
        .then((answer) => {

            //TODO: fetch relevant package.json from mock DB (kursus.json) based on user's choice        
            // create package.json file
            fs.appendFile('package.json', packageJson, (err, file) => {
                if (err) console.log("ERROR DALAM INISIALISASI package.json:",err)
                console.log(chalk.bgGreen(chalk.white('Berhasil menginisialisasi folder')));
            })

            //TODO: fetch relevant PANDUAN.txt from mock DB (kursus.json) based on user's choice
            fs.appendFile('PANDUAN.txt', panduan, (err, file) => {
                if (err) console.log("ERROR DALAM INISIALISASI PANDUAN.txt:",err)
            })

            //TODO: fix stderr, and npm warn
            // install dependencies from package.json
            exec("npm i", (error, stdout, stderr) => {
                if (error) {
                    console.log(`ERROR: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`STDERR: ${stderr}`);
                }
                console.log(chalk.bgGreen(chalk.white('Berhasil menginstall dependencies')));
            })

            console.log(chalk.green('Berhasil menginisialisasi folder latihan untuk kursus Javascript'))
        });
};

module.exports = { setup };