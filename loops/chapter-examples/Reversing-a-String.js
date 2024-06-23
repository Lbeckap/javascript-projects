let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed; //by putting the string first and the "" second , each index gets added to the BEGINNING of "" starting with b
}

console.log(reversed);

console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));

