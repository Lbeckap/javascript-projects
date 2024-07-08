// Import the modules exported from practiceExports.js below:

const practice = require('./practiceExports'); //pull the function in and assign it to a variable

console.log(typeof practice); //returns function.
console.log(practice.isPalindrome('that'));
console.log(practice.isPalindrome('radar'));

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}