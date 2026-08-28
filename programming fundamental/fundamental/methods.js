// methods fungsi bawaan dari js, tujuan manip data

// .slice (index mulai, index sebelum akhir)--> untuk mengambil value dalam urutan index
// .substring () --> ngambil string
// .length --> panjang suatu value/data/string, dimulai dari 1
// .indexOf('value') & .lastIndexOf('value')x dimulai dari 0
// .toUpperCase() & .toLowerCase() --> kapital, mengecilkan
// .replace('string', 'update') --> mengganti dengan yang baru

/*challenge hiding last 3 digit of phone number*/

// const phoneNumber = 6281717179525;
// const phoneNumberStr = phoneNumber.toString();
// const tigaDigitAkhir = phoneNumberStr.substring(10);
// const hidePhoneNumber = phoneNumberStr.replace(tigaDigitAkhir, "***");

const phoneNumber = 6281717179525;
const phoneNumberStr = phoneNumber.toString();
const hidePhoneNumber = phoneNumberStr.slice(0, -3) + "***";
console.log(hidePhoneNumber);
