let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(`${item}, ${tortoiseOne[item
   ]}`);

}

console.log("-".repeat(40));
//Lets try adding to it
for (item in tortoiseOne) {
   console.log(`${item}, ${tortoiseOne[item] + ' This was added :-)'}`); 

}

