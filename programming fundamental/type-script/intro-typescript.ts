let fullname: string = "Jovin Najwan";
let score: number = 80;
let isTrue: boolean = false;

console.log(score);
console.log(isTrue);
console.log(fullname);

// Function
function sum(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sum(2, 3));

// Array
const number: number[] = [100, 1, 2];
const fruits: string[] = ["apel", "anggur", "nanas"];
const random: (string | number | boolean | null | undefined)[] = [
  "apel",
  7,
  9,
  false,
  null,
  undefined,
];
const random01: any = [9090, "apa", null, false, undefined];

//object
//interface
interface student {
  fullname: string;
  age: number;
  isGraduated: boolean;
}

const student = {
  fullname: "jovin",
  age: 0,
  isGraduated: true,
};
console.log(student);

// type
type user = {
  fullname: string;
  age: number;
  isGraduated: boolean;
};
const user = {
  fullname: "blabla",
  age: 0,
  isGraduated: false,
};

// Array of Object
type userNew = {
  nama: string;
  umur: number;
  hobby: string;
  phonenumber?: number; // pake optional(?) kalo ga ada di dlm object
};

const userr: userNew[] = [
  {
    nama: "jovin",
    umur: 23,
    hobby: "mewarnai",
  },
];

//diskusi algoritma dan data structure. buat materi and di presentasikan!! --> membahas tentang algorithm
