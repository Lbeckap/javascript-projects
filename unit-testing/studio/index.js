
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: '100%',
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num) {
        let message = {
            2: 'Launch',
            3: 'Code',
            5: ' Rocks'
        };
        let launchcodeString = "";
        for (property in message) {
            if (num % property === 0) {
                launchcodeString += message[property];           
            } 
        }
        if (launchcodeString === ""){
            return `Rutabagas! That doesn't work.`;
        } else {
            if (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0){
               return launchcodeString += '! (CRASH!!!!)';
            }
            return launchcodeString.trim() + '!';
        }
    
        // if (num % 2 === 0) {
        //     if (num % 3 === 0) {
        //         if (num % 5 === 0) {
        //             return 'LaunchCode Rocks!';
        //         }
        //         return 'LaunchCode!';
        //     }
        //     if (num % 5 === 0) {
        //         return 'Launch Rocks! (CRASH!!!!)';
        //     }
        //     return 'Launch!'
        // }
        // if (num % 3 === 0) {
        //     if (num % 5 === 0) {
        //         return 'Code Rocks!';
        //     }
        //     return 'Code!'
        // }
        // if (num % 5 === 0) {
        //     return 'Rocks!'
        // }
        // return `Rutabagas! That doesn't work.`;
    }
}

module.exports = launchcode;

