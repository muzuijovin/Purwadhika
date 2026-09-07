/*
CALLBACK

function yang dijadikan argument oleh function lain
*/

//indirect callback

function sum(num01, num02, callback) {
  const result = num01 + num02
  return callback(result)
}

function output(result) {
  console.log(result);
}

sum(10,20, output)

//direct

function sum(num01, num02, callback) {
  const result = num01 + num02
  return callback(result)
}

sum(20,20, function (result) {
  console.log(result);
})

//contoh pengaplikasian di methods js

// .map

const user  = ['jovin', 'eldin', 'hadev']
user.map((values, index) => {
  console.log(values);
})

// .reduce
// user.reduce((acc,val) => a + b , 0) direct


//callback funtion sebenarnya ada kaitannya dengan settimeout()/async. yaitu untuk delay proses nya. biar ga berjalan serentak. kalau jalan serentak, in real case takutnya kalau misal spek laptopnya ga memungkinkan malah jadi error.

//intinya kalau async (setTimeOut) ini pada calback bertujuan memaksa async untuk sync (berurutan)

{
  const fruits = ['apel', 'jagung', 'mangga']

  function Delete(callback) {
    setTimeout(() => {
      fruits.pop()
      return callback() // kalau misal kita ga gunain callback ini bakal ga kedelete ouputnya, karena selesai duluan get 
    }, 3000);
  }

  function get() {
    setTimeout(() => {
      console.log(fruits);
    }, 1000);
  }

  Delete(() => Delete(get))
}


//makanya ada promise untuk mempermudah apa yang async menjadi sync
