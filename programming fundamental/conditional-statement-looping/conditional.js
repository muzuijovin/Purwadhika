/*
conditional diperuntukkan untuk decision. ada 2 jenis if-else dan switch. ada 2 bagian yakni kondisi dan jalankan
*/

/*
if-else ada 3 macam yaitu
1. if
  if (condition) {jalankan}
2. if else
  if (condition) {
    jalankan}
  else if () {jalankan}

3. if else if else ...
 if (condition) {
    jalankan}
  else if (condition) {
    jalankan}
  else if (condition) {
    jalankan}
  else (condition) {jalankan}
*/

//noted: if-else-if-else, ketika condition= true. dia lgsg menjalankann blok kode yang benar dan tidak menjalakan blok kode yang ada dibawahnya.

if (10 > 1) {
  console.log("bener");
}

const inputNumber = 70;
if (inputNumber >= 70) {
  console.log("pinter");
} else {
  console.log("bodoh");
}

/*
switch-case pengkondisian untuk value yang tetap. sedangkan if-else pengkondisian comparison.

real case untuk status order (pending/paid/delivery) yang valuenya sudah tetap
*/

const grade = "a";

switch (grade) {
  case "A":
    console.log("pinter");
    break; //syntax wajib
  case "B":
    console.log("excellent");
    break;
  default:
    console.log("error");

    break;
}
