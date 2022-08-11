/**
 * * El Plan
 * * regular fs.mkdirSync but what is written are stored in the Pojokoding backend, and ca be managed via
 * * git
*/

const fs = require('fs');
const chalk = require('chalk')

const createFolder = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
    });
    
    console.log(chalk.green('FOLDER CREATED'))

    } else {
        console.log("That folder already exists")
    }

}

module.exports = { createFolder }

