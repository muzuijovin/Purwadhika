const array01 = [
  { name: "student 1", email: "student1@gmail.com" },
  { name: "student 2", email: "student2@gmail.com" },
];
const array02 = [
  { name: "student 1", email: "student1@gmail.com" },
  { name: "student 3", email: "student3@gmail.com" },
];

function mergedArray(arr1, arr2) {
  const filteredArray01 = arr1.filter(
    (value1) => !arr2.some((value2) => value2.email === value1.email),
  );
  const filteredArray02 = arr2.filter(
    (value2) => !arr1.some((value1) => value1.email === value2.email),
  );
  const filteredArray03 = arr1.filter((value1) =>
    arr2.some((value2) => value2.email === value1.email),
  );
  return [...filteredArray03, ...filteredArray01, ...filteredArray02];
}

console.log(mergedArray(array01, array02));
