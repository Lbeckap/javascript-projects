// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here
  test('should return "nonprofit" as the organization.', () => {
      let output = launchcode.organization;
      expect(output).toEqual('nonprofit');
  });

  test('should return "Jeff" as the executiveDirector.', () => {
    let output = launchcode.executiveDirector;
    expect(output).toEqual('Jeff');
  });

  test('should return "100%" as the percentage of cool employees.', () => {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toEqual('100%');
  });

  test('should return an array with the values "Web Development", "Data Analysis", "Liftoff".', () => {
    let output = launchcode.programsOffered;
    expect(output).toContain('Web Development');
    expect(output).toContain('Data Analysis');
    expect(output).toContain('Liftoff');
    expect(output.length).toEqual(3);
  });

  test('should return "Launch!" when LaunchOutput is passed a number that is ONLY divisible by 2.', () => {
    let output = launchcode.launchOutput(2);
    expect(output).toEqual('Launch!');
  });

  test('should return "Code!" when LaunchOutput is passed a number that is ONLY divisible by 3.', () => {
    let output = launchcode.launchOutput(3);
    expect(output).toEqual('Code!');
  });

  test('should return "Rocks!" when LaunchOutput is passed a number that is ONLY divisible by 5.', () => {
    let output = launchcode.launchOutput(5);
    expect(output).toEqual('Rocks!');
  });

  test('should return "LaunchCode!" when LaunchOutput is passed a number that is divisible by 2 AND 3.', () => {
    let output = launchcode.launchOutput(6);
    expect(output).toEqual('LaunchCode!');
  });

  test('should return "Code Rocks!" when LaunchOutput is passed a number that is divisible by 3 AND 5.', () => {
    let output = launchcode.launchOutput(15);
    expect(output).toEqual('Code Rocks!');
  });

  test('should return "Launch Rocks! (CRASH!!!!)" when LaunchOutput is passed a number that is divisible by 2 AND 5.', () => {
    let output = launchcode.launchOutput(10);
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  test('should return "LaunchCode Rocks!" when LaunchOutput is passed a number that is divisible by 2, 3 AND 5.', () => {
    let output = launchcode.launchOutput(30);
    expect(output).toEqual('LaunchCode Rocks!');
  });

  test('should return "Rutabagas! That doesn\'t work." when LaunchOutput is passed a number that is NOT divisible by 2, 3 or 5.', () => {
    let output = launchcode.launchOutput(7);
    expect(output).toEqual(`Rutabagas! That doesn't work.`);
  });

    
});