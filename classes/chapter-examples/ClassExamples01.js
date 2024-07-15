//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, eyeColor){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.eyeColor = eyeColor;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

let beaver = new Astronaut('Beaver', 6, 14);
console.log(beaver);
console.log(Astronaut); //[class Astronaut]

beaver.color = "brown";
console.log(beaver);
