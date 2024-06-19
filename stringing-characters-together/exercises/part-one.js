let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

num = 123.45;
let numString = String(num);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let stringLength = numString.length;

//evaluates as truthy if there is a '.' at any index, but zero
console.log('numString: ' + numString)
console.log(numString.includes('.'));

if (numString.includes('.')) {
    
    console.log(stringLength - 1);
    
} else {
    console.log(stringLength);
}