/*
Write a function to find the difference in 2 given array a. Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
*/

function diffArray(array1, array2) {
  let hasil = []

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      hasil.push(array1[i])
    }
  }  
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      hasil.push(array2[i])
    }
  }

  return hasil
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

console.log(diffArray(arr1, arr2));
