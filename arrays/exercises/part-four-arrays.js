let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let concatArr = holdCabinet1.concat(holdCabinet2);
console.log(concatArr, 'The original array is not altered.');

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
let slice1 = holdCabinet1.slice(1, 3);
let slice2 = holdCabinet2.slice(3, 5);
console.log(slice1, slice2, '\nThe original array is not altered.');

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
holdCabinet2.sort();
console.log('This difference is that verses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. \n sort(); sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.');
console.log(holdCabinet1);
console.log(holdCabinet2);
console.log('Yes, both original arrays are altered. toSorted(); can be used to sort without mutating the original array');