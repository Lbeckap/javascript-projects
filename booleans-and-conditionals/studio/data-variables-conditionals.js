// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true;
let launchSequenceMsg = 'All systems are go! Initiating space shuttle launch sequence.\n';
let launchDetailMsg =`Date: ${date}
Time: ${time}
Astronaut Count: ${astronautCount}
Crew Mass: ${crewMassKg} kg
Fuel Mass: ${fuelMassKg} kg
Shuttle Mass: ${shuttleMassKg} kg
Total Mass: ${totalMassKg} kg
Fuel Temperature: ${fuelTempCelsius} C
Weather Status: ${weatherStatus}
`;
let byeMsg = `Have a safe trip astronauts!`;
let dashes = `--------------------------------------
`;
let terminateMsg = `Required conditions NOT met! Launch operations terminated.`;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
if (
    astronautCount <= 7 &&
    astronautStatus === 'ready' &&
    totalMassKg < maximumMassLimit &&
    (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) &&
    fuelLevel === '100%' &&
    weatherStatus === 'clear'
  ) {
    console.log(launchSequenceMsg, dashes, launchDetailMsg, dashes, byeMsg);
  } else {
    console.log(terminateMsg, dashes, launchDetailMsg);
  }