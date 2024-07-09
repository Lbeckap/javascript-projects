// Code your crewMass function here:
const crewMass = function (selectedCrew) {
  let totalCrewMass = 0;

  for (let i = 0; i < selectedCrew.length; i++) {
    totalCrewMass += selectedCrew[i].mass;
  }
  return Math.round(totalCrewMass * 10) / 10;
};

// Code your fuelRequired function here:
function fuelRequired (totalMassOfCrew, selectedCrew) {
  const massOfRocket = 75000;
  const fuelToLiftOnekg = 9.5;
  let totalMass = massOfRocket + totalMassOfCrew;
  let fuelNeededForLEO = totalMass * fuelToLiftOnekg;

  for (let i = 0; i < selectedCrew.length; i++) {
    if (selectedCrew[i].species === 'cat' || selectedCrew[i].species === 'dog') {
      totalMass += 200
    } else {
      totalMass += 100;
    }
  }

  let result = `The mission has a launch mass of ${Math.ceil(totalMass)} kg and requires ${fuelNeededForLEO} kg of fuel.`;
  return result;

}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 //console.log(crewMass(crew));
 console.log(fuelRequired(crewMass(crew), crew));