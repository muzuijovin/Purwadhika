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

class Student {
  name = "";
  email = "";
  age = "";
  score = "";
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }

  get convertAge() {
    return new Date().getFullYear() - new Date(this?.age).getFullYear();
  }
}

const students = [
  new Student("Jovin Najwan", "jovin.najwan@gmail.com", "2003-06-15", 80),
  new Student("Budi", "budi@gmail.com", "2002-06-15", 90),
  new Student("Andi", "andi@gmail.com", "2001-02-15", 80),
];

function calculate(_student) {
  const sortedStudentAge = _student.sort((a, b) => a.convertAge - b.convertAge);
  const averageStudentAge = _student.reduce(
    (acc, item) => acc + item?.convertAge,
    0,
  );

  const sortedStudentScore = _student.sort((a, b) => a.score - b.score);
  const averageStudentScore = _student.reduce(
    (acc, item) => acc + item.score,
    0,
  );

  return {
    score: {
      highest: sortedStudentScore[sortedStudentScore.length - 1],
      lowest: sortedStudentScore[0],
      average: averageStudentScore / sortedStudentScore.length,
    },
    age: {
      highest: sortedStudentAge[sortedStudentScore.length - 1],
      lowest: sortedStudentScore[0],
      average: averageStudentAge / sortedStudentScore.length,
    },
  };
}

console.log(calculate(students));

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
