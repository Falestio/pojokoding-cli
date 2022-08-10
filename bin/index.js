#! /usr/bin/env node
const inquirer = require("inquirer");
const yargs = require("yargs");

console.log("This is the CLI");

const usage = "$0 <perintah>";

const login = (yargs) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'Masukkan email Anda',
        },
        {
            type: 'input',
            name: 'password',
            message: 'Masukkan password Anda',
        },
    ]).then((answers) => {
        console.log(answers);
    })
}

const options = yargs
  .scriptName("poko")
  .usage(usage)
  .command("login", "|| Melakukan login akun Pojokoding.com", login(yargs))
  .help().argv;
