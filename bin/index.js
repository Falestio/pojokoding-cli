#! /usr/bin/env node

const chalk = require('chalk')

const {getJoke} = require('./../lib/request')
const {setup} = require('./../lib/setup')
const {latihan} = require('./../lib/latihan')

const args = process.argv.slice(2,3)[0]
const secondArgs = process.argv.slice(3,4)[0]

if(args == 'joke'){
    getJoke()
}

if(args == 'setup'){
    setup()
}

if(args == 'latihan'){
    latihan()
}

if(args == undefined){
    console.log("This is Help")
}
