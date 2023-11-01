class Bank {
  balance = 0;
  transactions = [];

  deposit(amount) {}
  withdraw(amount) {}
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      type,
      amount,
    };
    this.transactions.push(transaction);
  }
}
