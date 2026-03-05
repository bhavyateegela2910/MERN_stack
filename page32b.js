import {deposit,showTransactions,checkBalance,withdraw} from "./bank.js"
deposit(1, 1500);
deposit(1, 1000);
withdraw(1, 500);

checkBalance(1);

showTransactions(1);