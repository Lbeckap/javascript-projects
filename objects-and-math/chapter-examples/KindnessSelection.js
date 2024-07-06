function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 for (let i = 0; i < 3; i++) {
  console.log(`happiness: ${randomSelection(happiness)}`);
  console.log(`words: ${randomSelection(words)}`);
 }
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 
  let zeroOrOne = Math.floor(Math.random() * 2);
  console.log(`zeroOrOne: ${zeroOrOne}`);
  if (zeroOrOne === 0) {
    console.log(`Random array happiness`);
    console.log(`happiness: ${randomSelection(happiness)}`);
    console.log(`happiness: ${randomSelection(happiness)}`);
    
  } else {
    console.log(`Random array words`);
    console.log(`words: ${randomSelection(words)}`);
    console.log(`words: ${randomSelection(words)}`);
  }
 
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.