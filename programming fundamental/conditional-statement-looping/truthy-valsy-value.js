/*
falsy-truthy nilai non boolean yang di konversi menjadi boolean

falsy
1. ''
2. 0
3. undefined
4. NaN
5. null
*/

const inputUsername = "s";
/*
if (inputUsername.length > 0) {
  console.log("valid");
} else {
  console.log("non valid");
}
*/

if (inputUsername) {
  console.log("valid");
} else {
  console.log("non valid");
}
