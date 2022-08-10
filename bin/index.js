#! /usr/bin/env node
const inquirer = require("inquirer");
const yargs = require("yargs");
const chalk = require('chalk')

const {latihan} = require('./../lib/latihan')
const {login} = require('./../lib/login')

const args = process.argv.slice(2,3)
const secondArgs = process.argv.slice(3,4)

const help = 'Ini adalah help'

if(args == 'login'){
    login()
}

if(args == 'latihan'){
    latihan()
}

if(args == false){
    console.log(help)
}
