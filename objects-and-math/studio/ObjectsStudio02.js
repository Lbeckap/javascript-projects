// Code your orbitCircumference function here:
const orbitCircumference = function() {
  return 2 * (Math.PI) * 2000;
}

// Code your missionDuration function here:
function missionDuration(numOfOrbits = 5, orbitRadius = 2000, orbitalSpeed = 28000) {
let time = (orbitCircumference() * numOfOrbits) / orbitalSpeed;
time = (Math.round(time * 100) / 100);
let resultMsg = `The mission will travel ${orbitCircumference() * numOfOrbits} km around the planet, and it will take ${time} hours to complete.`
console.log(resultMsg); //? Should I refactor to log message outside the function?
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended (candidate, orbitalSpeed = 28000, orbitRadius = 2000) {
  let time = missionDuration(3, orbitRadius, orbitalSpeed);
  let result = `${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${candidate.o2Used(time)} kg of oxygen.`;
  return result;
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 
console.log(orbitCircumference());
//onsole.log(missionDuration());
console.log(oxygenExpended(selectRandomEntry(crew)));

//console.log(crew[0]);