const path=require('path');
// The path module in Node.js provides utilities for working with file and directory paths.

// __filename is a built-in variable in Node.js.
// It contains the absolute path of the currently executing file.
console.log(path.dirname(__filename)) //directory name
console.log(path.basename(__filename)) //file name
console.log(path.extname(__filename)) //extension name

const joinpath=path.join("/users","documents","node","projects") //join path -- relative path
console.log(joinpath)

//resolve path -- absolute path
const resolvepath=path.resolve("user","documents","node","projects")
console.log(resolvepath)

console.log("Directories")
console.log(path.dirname(__dirname)) //directory name
console.log(path.basename(__dirname)) //file name
console.log(path.extname(__dirname)) //extension name

const normalizepath=path.normalize("/user/.documents/..node//projects")
console.log(normalizepath)
const info=path.parse('/user/local/test/data.txt')
console.log(info)

const rebuilt=path.format(info)
console.log(rebuilt)

console.log(path.isAbsolute('/user/local'))
console.log(path.isAbsolute('data/file.txt'))