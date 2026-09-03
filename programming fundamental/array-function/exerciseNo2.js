function fizzBuzz(totalLooping) {
    for (let i = 0; i <= totalLooping; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
        
      }
    }
  }

  fizzBuzz(20);
  /*
  1. sediakan input number
  2. number yang di kecil (ex:5), bakal di loop 1-5
  3. conditional statement (ketika muncul kelipatan 3, yang keluar (fizz) && kalau kelipatan 5 yang keluar (buzz), kalao mucul kelipatan 3 dan 5 keluar fizzbuzz)
  4. semua blok kode ada di dalam function loopmultiples. kalau input prompt maka function akan dijalankan
  */
