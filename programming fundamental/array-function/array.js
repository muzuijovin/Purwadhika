/*
  ARRAY 
merupakan variabel yang dapat menyimpan lebih dari 1 value
*/

const firstArray = ["apel", "anggur", "nanas"];
const secondArray = new Array(1, 2, 3, 4, 5); // class
console.log(firstArray);
console.log(secondArray);

// CRUD (Create, Read, Update, Delete)

// 1. read
const fruits = ["apel", "nangka", "melon"];
fruits.splice();
console.log(fruits[0]);
console.log(fruits[2]);

// 2. update
fruits[1] = "durian";
console.log(fruits);

// 3. Delete
// delete fruits[2];
console.log(fruits);

/*
ARRAY METHODS
syntax/funtion siap pakai yang disediakan dari JS, yang berfungsi untuk memanipulasi
*/

// .length : untuk mengetahui panjang data dari array
{
  const fruits = ["nanas", "anggur"];
  console.log(fruits.length);
}

// .push      : untuk menambahkan value di akhir
// .unshift   : untuk menambahkan value di awal

const city = ["tanggerang", "jakarta", "medan"];
city.push("depok");
city.unshift("malang");
console.log(city);

// .pop       : menghapus value di awal
// .shift     : menghapus value di akhir

const province = ["jawa barat", "DKI Jakarta", "yogyakarta"];
province.pop();
province.shift();
console.log(province);

// .splice    :menambah, menghapus, dan mengubah value dalam array
const foods = ["nasi goreng", "ayam goreng", "mie ayam", "bakso"];
foods.splice(0, 1, "ayam pangang"); //(start,mengapus berapa data, meengganti dengan apa)
console.log(foods);
