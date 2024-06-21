const userWord = require('readline-sync');
const userNumber =require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let word = userWord.question("Please enter a word to be converted... ");
let number = userNumber.question("Please enter the number of letters to be moved... ");

if (number >= word.length) {
    number = word.length - 1;
    let error = `You entered a number longer or equal to the length of the word. The default value of ${word.length - 1}  has been applied.`
    console.log(error);
}

let snippet = word.slice(0, number);
let wordWithOutSnippet = word.slice(number, word.length);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


let result = `The word ${word} is ${wordWithOutSnippet + snippet} in pseudo-pig Latin.`;

console.log(result);