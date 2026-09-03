/*
ada 2 cara membuat class
1. declarasion
2. expression
*/

//declarasion
class User {
  greeting() {
    console.log("halo, world!");
  }

  printData() {
    return "user data";
  }
}

//expression
const Student = class {
  greeting() {
    console.log("halo mas jovin!");
  }
};

const user = new User();
const student = new Student();

user.greeting();

student.greeting();

console.log(user.printData());
