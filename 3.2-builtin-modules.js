//Path
const path = require('path');
console.log(path.sep);//returns the separator used in the path  / or \ => linux or NT
console.log(path.join('/content','subfolder','test.txt'));//joins the paths using the specified sep from above
console.log(path.basename('/content/subfolder/test.txt'));//returns the filename with extension
console.log(path.extname('/content/subfolder/test.txt'));//returns the extension of the file
console.log(path.resolve(__dirname,'content','subfolder','test.txt'));//returns the absolute path of the file
console.log(path.resolve('content','subfolder','test.txt'));//returns the absolute path of the file concatenated to filedir