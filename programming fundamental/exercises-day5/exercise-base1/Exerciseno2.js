/*
Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. a. Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

// function randomWord (a,b,c,d) {
//   let buah = [a,b,c,d]

//   return buah.toString()
// }

// let called = randomWord('nanas', 'anggur', 'apel', 'nanas')

// console.log(called);
function makanan(buah) {
  let changeToString = buah.join(", ");
  let stringbuah =
    changeToString.slice(0, -5) + " and" + changeToString.slice(-5);
  return stringbuah;
}

let arr = ["apple", "banana", "cherry", "date"];
console.log(makanan(arr));
