const prompt = require('prompt-sync')();
let getName = prompt('Enter the name..');

const string = 'Hello!! <<UserName>>,How are you?';
const newstring = string.replace('<<UserName>>', getName);
console.log(newstring);
