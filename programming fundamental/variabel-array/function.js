/*
Function, digunakan untuk menyimpan blok kode, mengefisiensi waktu karena tidak perlu menulis berulang ulang
*/

// Declarative function
function greeting() {
  //di dalam scope diisi blok kode
  console.log("halo world!");
}
greeting();

// Function Expression
const welcome = function () {
  console.log("halo world!");
};
welcome();

// Arrow Function

const text = () => {
  console.log("halo world!");
};
text();

// function with params and argument
function greeting(username, hobby, address) {
  console.log(
    `halo.. nama saya ${username}, lalu saya memiliki hobby ${hobby}, saya juga berasal dari ${address}`,
  );
}
greeting("Jovin Najwan", "menggambar", "Depok");

//function scope  :function with return
function printOut() {
  const templateMassage = "hello, world!";
  const nama = "Jovin";

  return { templateMassage, nama };
  // return [templateMassage, nama];
}

const { templateMassage, nama } = printOut();
console.log(templateMassage);
console.log(nama);

// const [templateMassage, nama] = printOut();
// console.log(templateMassage);
// console.log(nama);


