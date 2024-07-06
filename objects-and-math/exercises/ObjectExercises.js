let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let crew = [superChimpOne, salamander,superChimpTwo, beagle, tardigrade];

// After you have created the other object literals, add the astronautID property to each one.
let checkForSameId = [];
function addAstronautID (animals) {
   animals.astronautID = Math.ceil(Math.random() * 10);

   while (checkForSameId.includes(animals.astronautID)){
      animals.astronautID = Math.ceil(Math.random() * 10);
   }
   checkForSameId.push(animals.astronautID);
 
   return animals;
}

// Add a move method to each animal object
function addMoveMethod(animal) {
   animal.move = function () {
      let steps = Math.floor(Math.random() * 11);
      return steps;
   }
  return animal;
}

for (let i = 0 ; i < crew.length; i++) {
   addAstronautID(crew[i]);
   addMoveMethod(crew[i]);
}
console.log(crew);

// Print out the relevant information about each animal.
function crewReports (animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReports(tardigrade));

// Start an animal race!
function fitnessTest(arr) {
   let result = [];
   for (let i = 0; i < arr.length; i++){
      let turns = 0;
      let steps = 0;
      while (steps < 21) {
         steps += arr[i].move();
         turns++;
      }
      result.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return result;
}

fitnessTest(crew).forEach(element => {
   console.log(element);
});
