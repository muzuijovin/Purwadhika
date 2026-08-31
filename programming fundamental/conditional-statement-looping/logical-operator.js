/*
logical operator digunakan untuk mengkombinasi lebih dari 1 kombinasi/variabel

ada 3 jenis, yaitu:
1. and (variable && variable), value harus true dua duanya untuk dijalankan
2. or (variable || variable), salah satu value yang trus, bisa dijalankan
3. not (!), kebalikan dari value suatu variable
*/

console.log(100 >= 100 && 2 !== 1 && "abc" === "abc"); // (true && true && true) menghasilkan true
console.log(100 >= 100 || 1 != "1" || "abc" === "ABC"); // (true || false || false) menghasilkan true
console.log(!(100 !== "100")); // (!true) menghasilkan false 
