//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    averageScores() {
        let sum = 0;
       this.scores.forEach(item => {
         sum += item;
       });
        return Math.round((sum / this.scores.length) * 10) / 10;
    }

    status() {
        let currentStatus = "";
        if (this.averageScores() >= 90) {
            currentStatus = 'Accepted';
        } else if (this.averageScores() >= 80 && this.averageScores() < 90) {
            currentStatus = 'In Reserve';
        } else if (this.averageScores() >= 70 && this.averageScores() < 80) {
            currentStatus = 'On Probation';
        } else {
            currentStatus = 'Declined';
        }
        return `${this.name} earned an average test score of ${this.averageScores()} and has a status of "${currentStatus}".`;
    }
}

let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bubba, merry, glad);

bubba.addScore(83);
console.log(bubba.scores);
console.log(`Merry's average: ${merry.averageScores()}`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

function getToAccepted(animal) {
    if (animal.averageScores() >= 90) {
        console.log(`${animal.name} has already been accepted.`);
    } else {
        let count = 0;
        while (animal.averageScores() < 90) {
            animal.addScore(100);
            count++;
            console.log(`Test: ${count}\n${animal.status()}`);
        }
    }
}

getToAccepted(glad);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.