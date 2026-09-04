/*
Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average
*/

// class Student {
//   name = "";
//   email = "";
//   age = "";
//   score = "";
//   constructor(name, email, age, score) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.score = score;
//   }

//   get convertAge() {
//     return (new Date() - new Date(this?.age))/(1000 * 60 * 60 * 60 * 24)
//   }
// }

// const students = [
//   new Student("Jovin Najwan", "jovin.najwan@gmail.com", "2003-06-15", 80),
//   new Student("Budi", "budi@gmail.com", "2002-06-15", 90),
//   new Student("Andi", "andi@gmail.com", "2001-02-15", 80)
// ];

// calculate(_student) {
//     const sortedStudentAge = _student.sort((a,b) => a.age - b.age);
//     const averageStudentAge = _student.reduce((acc, item) => acc + item.age, 0);
//   }


// const students = [
//   {
//     name: "Jovin",
//     email: "jovin@gmail.com",
//     age: 23,
//     score: 100,
//   },
//   {
//     name: "Budi",
//     email: "budi@gmail.com",
//     age: 20,
//     score: 80,
//   },
//   {
//     name: "Andi",
//     email: "andi@gmail.com",
//     age: 25,
//     score: 90,
//   },
// ];

// function calculateStudentDatas(students) {
//   const scores = students.map((values) => values.score).sort((a, b) => a - b);
//   const ages = students.map((values) => values.age).sort((a, b) => a - b);

//   // scores.sort((a, b) => a - b);
//   // ages.sort((a, b) => a - b);

//   const scoreAverange =
//     scores.reduce((total, score) => total + score, 0) / scores.length;
//   const ageAverange = ages.reduce((total, age) => total + age, 0) / ages.length;

//   return {
//     score: {
//       highest: scores[scores.length - 1],
//       lowest: scores[0],
//       averange: scoreAverange,
//     },
//     age: {
//       highest: ages[ages.length - 1],
//       lowest: ages[0],
//       averange: ageAverange,
//     },
//   };
// }

// console.log(calculateStudentDatas(students));
