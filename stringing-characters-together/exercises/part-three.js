//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let sliceJ = language.slice(0, 1);
let sliceS = language.slice(4, 5);
console.log(`${sliceJ}${sliceS}`);

//2. Without using slice(), use method chaining to accomplish the same thing.
let indexJ = language.indexOf('J');
let indexS = language.indexOf('S');
console.log(language[indexJ] + language[indexS]);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0]}${language[4]}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toUpperCase().slice(0, 4).indexOf('V'));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let TitleCase = notTitleCase.replace('t', 'T').replace('c', 'C');
console.log(TitleCase);

