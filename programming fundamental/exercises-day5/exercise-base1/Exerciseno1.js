/*
Write a function to get the lowest, highest and average value in the array (with and without sort function). a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
function apaAja(arr) {
  const ngurutin = arr.sort((a, b) => a - b);

  const lowest = ngurutin[0];
  const highest = ngurutin[arr.length - 1];
  const average = ngurutin.reduce((jumlah, value) => {
    return jumlah + value;
  }, 0);
  const hasilAverage = average / arr.length;
  return `{lowest: ${lowest}, highest: ${highest}, average: ${hasilAverage}}`;
}
let arrayRandomInput = [12, 5, 23, 18, 4, 45, 32];
console.log(apaAja(arrayRandomInput));
