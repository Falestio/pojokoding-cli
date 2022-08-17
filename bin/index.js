#! /usr/bin/env node

const chalk = require('chalk')

const {getJoke} = require('./../lib/request')
const {setup} = require('./../lib/setup')
const {latihan} = require('./../lib/latihan')
const {test} = require('./../lib/test')

const args = process.argv.slice(2,3)[0]
const secondArgs = process.argv.slice(3,4)[0]

if(args == 'joke'){
    getJoke()
} else if(args == 'setup'){
    setup()
} else if(args == 'latihan'){
    latihan()
} else if(args == 'test'){
    test()
} else if(args == undefined){
    console.log("Jalankan perintah" ,chalk.blue("poko setup"))
} else {
    console.log("perintah itu gak ada")
}