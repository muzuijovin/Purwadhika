/*variabel berfungsi untuk menyimpan Data*/
var firstName; //Deklarasi
firstName = "Jovin"; //inisialisasi/memasukkan data

console.log(firstName); //panggil

/* aturan variabel (var,let, const)

1. nama variabel boleh di duplikat = var
2. data variabel bole di ubah = var , let
3. pemanggilan variabel diluar scope = cuma var. let dan const gabisa
 */

// example
{
  let nama = "najwan";
  {
    console.log(nama);
  }
} //kalo ini kan walaupun pemanggilannya dalam scope berbeda tp ttp satu scope ttp bisa


