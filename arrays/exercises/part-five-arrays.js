let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let strArr = str.split('e');
console.log(strArr);
console.log('The purpose of the parameter inside of () is to act as an delimeter');
console.log('Original String:',str);

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinArr = arr.join(' ');
console.log(joinArr);
console.log('The purpose of the parameter inside out () is to denote if the new array will be separated by commas or a specified separator string');
console.log('Original Array:', arr);

//3) Do split or join change the original string/array?
console.log('The original string or array is not changed.');

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldArr = cargoHold.split(',').sort().join(',');
console.log(cargoHoldArr);
