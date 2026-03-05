let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];



function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      if (customer.balance < amount) {
        console.log("Insufficient balance");
        return customer;
      }

      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    }
    return customer;
  });

  console.log("Withdrawal processed");
}
function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}
function showTransactions(id) {
  const customer = customers.find((customer) => customer.id === id);

  if (customer) {
    console.log("Transaction History for", customer.name);
    console.log(customer.transactions);
  } else {
    console.log("Customer not found");
  }
}


deposit(1, 1500);
deposit(1, 1000);
withdraw(1, 500);

checkBalance(1);

showTransactions(1);