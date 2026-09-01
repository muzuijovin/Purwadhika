const brands = ["nike", "adidas", "joma", "puma", "erspo"];
// for (let i = 0; i < brands.length; i++) {
//   console.log(brands[i]);
// }

//for of : untuk melooping/proses iterasi tipe data array
// -sudah pasti melooping dari item pertama sampai terakhir

for (const values of brands) {
  console.log(values);
}

//continue & break

//continue  : menskip 1x looping

for (let i = 0; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
} // jadi ketika i === 3. maka di skip, jadi tak terlooping

//break     : menghentikan looping
for (let a = 0; a <= 6; a++) {
  if (a === 4) break;
  console.log(a);
}

const fruits = ["anggur", "nanas", "apel", "sirsak"];

//.forEach()  : mirip seperti for of. cuma bisa dapat index juga.
// penggunaaan sering menggunakan arrow function// and termasuk callback function

fruits.forEach((values, index) => {
  console.log(values);
  console.log(index);
});

//.map()      :mirip forEach. tapi menghasilkan array baru di console

const newFruits = fruits.map((values, index) => {
  return `Nama buah = ${values}`;
});
console.log(newFruits);

//.filter()   : untuk memfilter apakah ada suatu value tersebut di dalam array. kalau ada nanti dibuatkan array baru yang berisikan filter

const newFruits1 = fruits.filter((values) => {
  return values === "anggur" || values === "semangka";
});
console.log(newFruits1);
