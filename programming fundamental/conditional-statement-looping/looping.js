/*
Looping digunakan untuk perulangan atau menjalankan kode secara berulang ulang
*/

// WHILE
let start = 1; // 1->2->3
while (start <= 2) {
  // karena 3 kurang dari 2 itu false. jadi looping di berhentikan, cukup sampai 2 saja.
  console.log("indonesia");
  start++;
}

let number = 5; // 5->6
while (number === 5) {
  //ketika number++ menghasilkan 6, kan udah ga sama dengan 5 ya, jadi looping diberhentikan
  console.log("depok");
  number++;
} // diulang sekali

// DO-WHILE

let first = 1;
do {
  console.log("jcwd");
  first++;
} while (first <= 5);

//for loop
for (let start = 0; start < 5; start++) {
  console.log("tangsel");
}