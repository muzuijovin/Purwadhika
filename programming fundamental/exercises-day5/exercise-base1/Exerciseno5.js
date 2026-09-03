/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array. a. Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      b. Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]Exercise
*/


function arrPush(arr) {
  const array = [1, 2, 3, 4]
  array.push(arr);
  return array;
}

const elementTambahan = 7;
console.log(arrPush(elementTambahan));
