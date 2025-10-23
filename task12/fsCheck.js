const fs = require('fs')
const path = require('path')

const datafolder = path.join(__dirname, "data")

if (!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder)
    console.log("data folder created")
}

const filepath = path.join(datafolder, "example.txt")

fs.writeFileSync(filepath, "This is sample data for testing!")
console.log("File created")

const readfromfile = fs.readFileSync(filepath)
console.log(readfromfile)

const readfromfileUTF = fs.readFileSync(filepath, "utf-8")
console.log(readfromfileUTF)

const dataFolder2 = path.join(__dirname, "test");

if (!fs.existsSync(dataFolder2)) {
    fs.mkdirSync(dataFolder2)
    console.log("data folder created")
}

const filePath = path.join(dataFolder2, "example.txt")
fs.writeFile(filePath, "Hello KMIT!", (err, data) => {
    if (err) throw err
    else console.log(data)
})