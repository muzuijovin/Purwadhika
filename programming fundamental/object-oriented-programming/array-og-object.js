// didalam array ada object. gimana cara aksesnya

const product = [
  {
    name: "chocolatos",
    price: 5000,
    stocks: 1000,
  },
  12,
  13,
];

console.log(product[0].name); //manggil value dalam propertiesnya

for (const key in product[0]) {
  console.log(key);
} // untukmanggilkey nya
