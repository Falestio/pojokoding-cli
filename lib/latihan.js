const fs = require('fs')

const latihanDb = [
    {
        id: 1,
        latihanName: "latihan-javascript-1",
        files: [
            {
                fileName: "index.js",
                content: "this is index.js content"
            },
            {
                fileName: "index.test.js",
                content: "this is index.test.js content"
            },
        ]
    },
    {
        id: 2,
        latihanName: "latihan-javascript-2",
        files: [
            {
                fileName: "index.js",
                content: "this is index.js content"
            },
            {
                fileName: "index.test.js",
                content: "this is index.test.js content"
            },
        ]
    }
]

const latihan = () => {
    let latihanData = latihanDb[0]
    
    if (!fs.existsSync(latihanData.latihanName)) {
        fs.mkdirSync(latihanData.latihanName, {
            recursive: true
        });
    } else {
        console.log("File dengan nama latihan Javascript satu sudah ada")
        return
    }

    latihanData.files.forEach((file) => {
        fs.appendFile(`./${latihanData.latihanName}/${file.fileName}`, file.content, (err, _) => {
            if (err) console.log('ERROR KETIKA HENDAK MEMBUAT FILE DIDALAM FOLDER YANG BARU DIBUAT')
            console.log(`sukses membuat file ${file.fileName}`)
        })
    })
}

module.exports = { latihan }