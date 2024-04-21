//global vars

console.log(__dirname); // pwd
console.log(__filename); // pwd + filename
console.log(module); // module object
console.log(process)
setTimeout(() => {
    console.log("Hello world!"); //sleep
}, 5000);
setInterval(() => {
    console.log('Hello, world!'); //this is like a for loop but uses time to as control var
}, 1000);
