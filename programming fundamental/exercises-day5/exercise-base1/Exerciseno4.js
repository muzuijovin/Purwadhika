/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length. a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
function concatPlus(alpha, betha) {
  
  let plus = [alpha[0]+betha[0], alpha[1]+betha[1], alpha[2]+betha[2]]
  return plus;
}

let alphaInput = [1,2,3]
let bethaInput = [3,2,1]

console.log(concatPlus(alphaInput, bethaInput));


