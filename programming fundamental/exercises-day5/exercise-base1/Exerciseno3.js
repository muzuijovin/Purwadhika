/*
Write a function from a given array of numbers and return the second smallest number a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
function urutanKedua(number) {

  let urutkan = number.sort((a,b) => a - b)
  let hasil = urutkan[1];
  return hasil
}
let numb = [5, 3, 1, 7, 2, 6]
console.log(urutanKedua(numb));

