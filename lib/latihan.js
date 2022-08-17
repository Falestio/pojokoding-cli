const fs = require('fs')
const path = require("path");
const inquirer = require('inquirer')

let indexjsContent = 
`function tambah(a, b){
    // -------- Batas jawaban ------------
    a + b
    // -------- Batas jawaban ------------
}

module.exports = { tambah }`

let indextestjsContent =
`const { tambah } = require('./index')
const expect = require('chai').expect

describe('Hasil Test', () => {
    it('Fungsi mengeluarkan output', () => {
        expect(tambah(1, 1)).to.not.be.false;
    })

    it('Test Uji 1 (a = 2, b = 2)', () => {
        expect(tambah(2, 3)).to.equal(5);
    })

    it('Test Uji 2 (a = -122, b = 22)', () => {
        expect(tambah(-122, 22)).to.equal(-100);
    })
})`

let soalContent = 
`== SOAL ==

Fungsi tambah pada index.js berfungsi untuk menambahkan dua buah paramater yang diberikan yaitu
a dan b. Tapi fungsi tersebut tidak memberikan output, apa solusinya?`

const latihanDb = [
    {
        id: 1,
        latihanName: "latihan-javascript-gampang-banget",
        files: [
            {
                fileName: "index.js",
                content: indexjsContent
            },
            {
                fileName: "index.test.js",
                content: indextestjsContent
            },
            {
                fileName: "SOAL.txt",
                content: soalContent
            },
        ]
    },
]

//TODO: fetch from real database

const latihan = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "kursus",
            message: "Pilih latihan",
            choices: [
                {
                    name: "Latihan gampang banget",
                    value: "latihan",
                },
            ], 
        },
    ]).then((answer) => {
        let latihanData = latihanDb[0]
        
        if (!fs.existsSync(latihanData.latihanName)) {
            fs.mkdirSync(latihanData.latihanName, {
                recursive: true
            });
        } else {
            console.log("Latihan tersebut sudah diinstall di folder ini")
            return
        }
    
        latihanData.files.forEach((file) => {
            fs.appendFile(`./${latihanData.latihanName}/${file.fileName}`, file.content, (err, _) => {
                if (err) console.log('ERROR KETIKA HENDAK MEMBUAT FILE DIDALAM FOLDER YANG BARU DIBUAT')
                console.log(`sukses membuat file ${file.fileName}`)
            })
        })
    })
}

module.exports = { latihan }