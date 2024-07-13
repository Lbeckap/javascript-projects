const checkFive = require('../checkFive.js');

describe('The checkFive function', function () {
    test('should print "is less than 5." if number is less than 5', () => {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test('should print " is equal to 5." if number is less than 5', () => {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
    test('should print " is greater than 5." if number is less than 5', () => {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });    
});