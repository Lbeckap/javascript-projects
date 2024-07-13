const whoWon = require("../RPS.js");

describe('The whoWon function', () => {
    test('should return "TIE!" if the values are equal', () => {
      let output = whoWon('rock','rock');
      expect(output).toEqual('TIE!');
    });
    test('should return "Player 2 wins!!" if p1 is "rock" and p2 is "paper".', () => {
        let output = whoWon('rock','paper');
        expect(output).toEqual('Player 2 wins!');
      });
    test('should return "Player 2 wins!" if p1 is "paper" and p2 is "scissors".', () => {
      let output = whoWon('paper','scissors');
      expect(output).toEqual('Player 2 wins!');
    });
    test('should return "Player 2 wins!" if p1 is "scissors" and p2 is "rock".', () => {
        let output = whoWon('scissors','rock');
        expect(output).toEqual('Player 2 wins!');
      });
      test('should return "Invaid Input" if p1 or o2 is NOT "rock", "paper", or "scissors".', () => {
        let output = whoWon('hoot','owl');
        expect(output).toEqual('Invalid Input');
      });

});
