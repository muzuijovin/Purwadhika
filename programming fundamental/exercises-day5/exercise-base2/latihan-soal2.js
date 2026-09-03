/*
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 

example
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 The function will return [5, 10, 24, 3, 6]
*/

function maximumSize(max, arr) {
  return arr.slice(0,max)
  
}

const integers = [5, 10, 24, 3, 6, 7, 8];
maxSize = 5

console.log(maximumSize(maxSize,integers));
