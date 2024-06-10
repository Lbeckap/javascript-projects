// Declare and assign the variables below
const spaceShuttleName = "Determination";
const shuttleSpeed = 17500;
const distanceToMars = 225000000;
const distanceToMoon = 384400;
const milesPerKilo = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(spaceShuttleName, typeof spaceShuttleName,
    '\n',shuttleSpeed, typeof shuttleSpeed,
    '\n',distanceToMars, typeof distanceToMars,
    '\n',distanceToMoon, typeof distanceToMoon,
    '\n',milesPerKilo, typeof milesPerKilo,
);

// Calculate a space mission below
const milesToMars = distanceToMars * milesPerKilo;
const hoursToMars = milesToMars / shuttleSpeed;
const daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(`${spaceShuttleName} will take ${daysToMars} days to reach Mars.`);

// Calculate a trip to the moon below
const milesToMoon = distanceToMoon * milesPerKilo;
const hoursToMoon = milesToMoon / shuttleSpeed;
const daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(`${spaceShuttleName} will take ${daysToMoon} days to reach Mars.`);
