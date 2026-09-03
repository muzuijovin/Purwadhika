/*
Based on the array below write a function that will return primitive data types only. a. let arr = [1, [], undefined, {}, "string", {}, []]; b. The function will return [1, undefined, “string”]
*/

function primitif(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value !== "object") {
      result.push(value);
    }
  }

  return result;
}

let array = [1, [], undefined, {}, "string", {}, []];
console.log(primitif(array));
