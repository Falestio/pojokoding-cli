#! /usr/bin/env node
const inquirer = require("inquirer");
const yargs = require("yargs");
const chalk = require('chalk')

const args = process.argv.slice(2,3)
const secondArgs = process.argv.slice(3,4)

const help = 'Ini adalah help'

if(args == 'login'){
    console.log('ini adalah login')
}

if(args == 'latihan'){
    console.log(chalk.bgBlue("ini adalah latihan"))
}

if(args == false){
    console.log(help)
}
