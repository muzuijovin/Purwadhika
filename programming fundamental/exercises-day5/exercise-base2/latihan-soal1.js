/*
Write a function from a given array of mixed data types and return the sum of all the number a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/

function numberOnly(arr) {
  return arr.reduce((varJumlah, value) => {
    if (typeof value === "number" && !isNaN(value)) {
      return varJumlah + value;
    }
    return varJumlah;
  }, 0);
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2,5,6];

console.log(numberOnly(mixedArray));
