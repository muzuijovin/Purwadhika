/*
Write a function to find duplicate values in an array a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]   
*/

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function findDuplicate(duple) {
  const duplicateResult = duple.filter((value, index) => {
    const isFirstTime = duple.indexOf(value) === index;

    return !isFirstTime;
  });

  return [...new Set(duplicateResult)];
}

console.log(findDuplicate(arr));

// function duplikatNumber(arr) {
//   let nonDuplikat = [];
//   let duplikat = [];

//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];

//     if (nonDuplikat.includes(value)) {
//       if (!duplikat.includes(value)) {
//         duplikat.push(value);
//       }
//     } else {
//       nonDuplikat.push(value);
//     }
//   }

//   return duplikat;
// }

// const arrInput = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(duplikatNumber(arrInput));
