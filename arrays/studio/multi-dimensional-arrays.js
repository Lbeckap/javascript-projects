let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(',').sort();
let cabinet2 = equipment.split(',').sort();
let cabinet3 = pets.split(',').sort();
let cabinet4 = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const cabinetInput = require('readline-sync');
const itemInput = require('readline-sync');

let selectedCabinetIndex = cabinetInput.question("Please enter a cabinet number from 0 to 3: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
while (selectedCabinetIndex > 3 || selectedCabinetIndex < 0) {
    console.error('You have entered an invalid cabinet number.');
    selectedCabinetIndex = cabinetInput.question("Please enter a cabinet number from 0 to 3: ");
} 
    console.log(cargoHold[selectedCabinetIndex]);

let selectedItem = itemInput.question("What item are you searching for? ");


if (cargoHold[selectedCabinetIndex].includes(selectedItem)) {
    console.log(`Cabinet ${selectedCabinetIndex} DOES contain ${selectedItem}`);
} else {
    console.log(`Cabinet ${selectedCabinetIndex} DOES NOT contain ${selectedItem}`);
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
