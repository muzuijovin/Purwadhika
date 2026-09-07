// create a function to recurtion

function faktorial(n) {
  //base case
  if (n === 0) {
    return 1
  }

  console.log(n);
  //recursion
  return n * faktorial(n-1)
}

console.log(faktorial(5));
