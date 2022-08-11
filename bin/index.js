#! /usr/bin/env node

const chalk = require('chalk')

const {latihan} = require('./../lib/latihan')
const {login} = require('./../lib/login')
const {getJoke} = require('./../lib/request')
const {createFolder} = require('./../lib/createFolder');

const args = process.argv.slice(2,3)[0]
const secondArgs = process.argv.slice(3,4)[0]


if(args == 'mkdir'){
    createFolder(secondArgs)
}

if(args == 'login'){
    login()
}

if(args == 'latihan'){
    latihan()
}

if(args == 'joke'){
    getJoke()
}


if(args == undefined){
    console.log("This is Help")
}
