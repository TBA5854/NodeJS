//fs

const fs=require('fs');
//fs is used to interact with the file system
const test=fs.readFileSync("./3.3-builtin-modules.js");
console.log(test);
fs.appendFileSync("./3.3-builtin-modules.js","\n//This is a another test");
fs.writeFileSync("./3.3-builtin-modules.txt","//This is a test");
//This is a test
//This is a another test
//This is a another test