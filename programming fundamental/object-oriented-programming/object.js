/*
OBJECT

merupakan data non-primitif yang isinya terdapat properties. value dari objek ini dapat diisi berbagai macam tipe data. komponen di dlm objek yakni terdiri dari properties yang didalamnya terdapat key dan value.
*/

//object literal
const user = {
  username: "jovin Najwan",
  passwaord: 12345,
  isverified: true,
};

//new object

const profile = new Object();
profile.fullname = "jovin najwan";
profile.address = "Depok";
profile.phone = "08****";

console.log(user);
console.log(profile);

// CRUD (create, read, update, delete) , karena struktur data kompleks. harus mengerti CRUD

const student = {
  name: "bang Jo",
  addres: "Jawa Barat",
};

// read
console.log(student.name); //penggunaan .
console.log(student["addres"]); //peggunaan ['']

// update
student.phone = "08*****";
console.log(student);

//delete

delete student.name;
console.log(student);

//optional chaining (?),, ini berguna untuk bertanya/memastikan apakah ada objek tersebut.

const product = {
  name: "sagu",
  price: 25000,
  weight: {},
};

console.log(product?.weight?.reference); //bacanya apakah product itu objek dan ada di blok kode. apakah weigth termasuk object dan ada di dalam produk?. ketika tidak ada dia tidak akan menunjukkan error, tapi undefined.

//for in loop
const admin = {
  username: "bangg jovin",
  password: 12345,
  isverified: true,
};

for (const key in admin) {
  console.log(key); // untuk memanggil key dalam properties
  console.log(admin[key]); //untuk manggil value dalam properties
}

// destructuring assigment
const fruit = ["mangga", "apel"];
const [buah1, buah2] = fruit;
console.log(buah1);
console.log(buah2);

const profileIndo = {
  nama: "jovin",
  umur: 23,
  hobby: 'mewarnai'
};

const {nama, umur, hobby} = profileIndo
console.log(nama);
console.log(umur);
console.log(hobby);


//spread operator,, bertujuan supaya bisa mengambil value, tanpa mengubah value utama
const fruit01 = ["mangga", "nanas", "jeruk"];
const fruit02 = [...fruit01];
const fruit03 = fruit01;

fruit02[1] = "nangka";
fruit03[2] = "melon";

console.log(fruit01);
console.log(fruit02); // dia ga akan merubah value yang ada di variable utama
console.log(fruit03); // dia mengubah value yang ada di variable utama
