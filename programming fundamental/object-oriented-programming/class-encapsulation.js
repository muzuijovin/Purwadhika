// encapsulation

class BankAccount {
  #costumerName = "";
  #balance = 0;

  constructor(costumerName, balance) {
    this.#costumerName = costumerName;
    this.#balance = balance;
    Object.freeze(this); //biar kode ga sembarangan diotak atik orang
  }

  displayData() {
    return this.#costumerName;
  }
}

const bankAccount = new BankAccount("Jovin Najwan", 12345);
console.log(bankAccount); //dia gabakal kepanggil. karena di enkapsulasi pake #

console.log(bankAccount.displayData()) // bisa dipanggil kalau dari dalem nya udh di return

