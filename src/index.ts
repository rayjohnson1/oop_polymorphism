//index
import BankMember from './BankMember';

const chuck = new BankMember(`Chuck`);

console.log(`\nCreating ${chuck.name}'s new savings account.`);
chuck.createSavingsAccount(50);
console.log(`Chuck's starting savings balance: $${chuck.getSavingsBalance()}`);

console.log(`\nCreating ${chuck.name}'s new checking account.`);
chuck.createCheckingAccount(50);
console.log(`Chuck's starting checking balance: $${chuck.getCheckingBalance()}`);

console.log("\nDepositing funds into savings.");
chuck.depositToSavings(5);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log("Depositing funds into checking.");
chuck.depositToChecking(5);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);

console.log(`\nCreating ${chuck.name}'s new misc account.`);
const christmasAccount = chuck.createMiscAccount("Christmas", 25);
console.log(`Chuck's starting ${christmasAccount.name} balance: $${chuck.getMiscAccountBalance(christmasAccount.id)}\n`);

console.log("Transferring funds from christmas to checking");
chuck.transferFunds(10, christmasAccount.id, chuck.checkingAccount.id);
console.log(`Chuck's christmas balance: $${christmasAccount.balance}`);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);

console.log("Transferring funds from savings to checking");
chuck.transferFunds(45, chuck.savingsAccount.id, chuck.checkingAccount.id);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()}`);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);

