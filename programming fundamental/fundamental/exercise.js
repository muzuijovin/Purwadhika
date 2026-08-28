//soal nomor 1 & 2
let length = 5;
let width = 3;
let resultPerkalian = width * length;
console.log(resultPerkalian);

let resultKelilingPersegiPanjang = (width + length) * 2;
console.log(resultKelilingPersegiPanjang);

//soal nomer 3
let radius = 5;
let diameter = radius * 2;
let circumference = 2 * (22 / 7) * radius;
let area = (22 / 7) * radius ** 2;

console.log(`diameter = ${diameter}, 
  circumference = ${circumference}, 
  area = ${area}`);

//soal nomor 4 cari sudut segitiga kalo 2 sudut dah tau
const a = 80;
const b = 65;
const lastAngleOfTriangle = 180 - a - b;
console.log(lastAngleOfTriangle);

//soal nomor 5
let totalHari = 400;
let totalTahun = Math.floor(totalHari / 365);
let totalBulan = Math.floor((totalHari % 365) / 30);
let hari = (totalHari % 365) % 30;

console.log(
  `${totalHari} hari = ${totalTahun} tahun, ${totalBulan} bulan, dan ${hari} hari `,
);

//soal nomor 6

const date1 = new Date(2022, 1, 20);
const date2 = new Date(2022, 1, 22);

const diffBetween = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(diffBetween);
