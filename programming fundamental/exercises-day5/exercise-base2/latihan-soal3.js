/*
Write a function that will combine 2 given array into one array    a. Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6] 
*/

function mergeArray(arraySatu, arrayDua) {
  return arraySatu.concat(arrayDua)
}

let arr1 = [1, 2, 3]
let arr2 =  [4, 5, 6]

console.log(mergeArray([1, 2, 3],[4, 5, 6]));

