/*
Write a function from the below array of number that will return sum of values.                                   a. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; b. The function will return 40
*/

function sumInput(arr) {
  let duplikat = [];
  let nonDuplikat = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (nonDuplikat.includes(value)) {
      if (!duplikat.includes(value)) {
        duplikat.push(value);
      }
      duplikat.push(value)
    } else {
      nonDuplikat.push(value);
    }
  }

  return duplikat.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

let array = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumInput(array));

