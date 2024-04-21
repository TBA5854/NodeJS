//Module
// like a class
// we create fn to simplify/break down prgm here , we simpllify further
// prgm -> modules -> functions rather than prgm -> funcs

function sayhi (name) {
    console.log(`Hello There , ${name}`); // we use backticks to use template strings
    // we can use ${} to use variables in strings
    // like f strings in python
}
// export default sayhi; 
module.exports = {sayhi};
// we export the function to use it in other files