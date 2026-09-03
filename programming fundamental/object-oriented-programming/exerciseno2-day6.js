//product

class Product {
  nameProduct = "";
  price = "";

  constructor(_nameProduct, _price) {
    this.nameProduct = _nameProduct;
    this.price = _price;
  }
}

//transaction

class Transaction {
  product = [];
  total = 0;

  addToCart(_Product, _qty) {
    this.product.push({
      product: _Product,
      qty: _qty,
    });

    this.total += _Product.price * _qty ;
  }

  showTotal() {
    console.log(`total : Rp${this.total}`);
  }

  checkOut() {
    return {
      product: this.product,
      total: this.total,
    };
  }
}

const products = [
  {
    nameProduct: "Indomie Goreng",
    price: 3500,
  },
  {
    nameProduct: "Aqua 600ml",
    price: 4000,
  },
  {
    nameProduct: "Teh Botol Sosro",
    price: 5000,
  },
  {
    nameProduct: "Chitato",
    price: 12000,
  },
  {
    nameProduct: "Pepsodent",
    price: 15000,
  },
];

const productList = products.map((values) => {
  return new Product(values.nameProduct, values.price);
});

const transactions = [
  {
    product: "Indomie Goreng",
    qty: 3,
  },
  {
    product: "Aqua 600ml",
    qty: 2,
  },
  {
    product: "Teh Botol Sosro",
    qty: 4,
  },
  {
    product: "Chitato",
    qty: 1,
  },
  {
    product: "Pepsodent",
    qty: 2,
  },
];

const transaction = new Transaction();

transactions.forEach((values) => {
  const product = productList.find(
    (item) => item.nameProduct === values.product
  );

  transaction.addToCart(product, values.qty);
});

transaction.showTotal();

const result = transaction.checkOut();

console.log(JSON.stringify(result, null, 2));
