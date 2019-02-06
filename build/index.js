"use strict";

var _BankMember = _interopRequireDefault(require("./BankMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index
var chuck = new _BankMember.default("Chuck");
console.log("\nCreating ".concat(chuck.name, "'s new savings account."));
chuck.createSavingsAccount(50);
console.log("Chuck's starting savings balance: $".concat(chuck.getSavingsBalance()));
console.log("\nCreating ".concat(chuck.name, "'s new checking account."));
chuck.createCheckingAccount(50);
console.log("Chuck's starting checking balance: $".concat(chuck.getCheckingBalance()));
console.log("\nDepositing funds into savings.");
chuck.depositToSavings(5);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Depositing funds into checking.");
chuck.depositToChecking(5);
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));
console.log("\nCreating ".concat(chuck.name, "'s new misc account."));
var christmasAccount = chuck.createMiscAccount("Christmas", 25);
console.log("Chuck's starting ".concat(christmasAccount.name, " balance: $").concat(chuck.getMiscAccountBalance(christmasAccount.id), "\n"));
console.log("Transferring funds from christmas to checking");
chuck.transferFunds(10, christmasAccount.id, chuck.checkingAccount.id);
console.log("Chuck's christmas balance: $".concat(christmasAccount.balance));
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));
console.log("Transferring funds from savings to checking");
chuck.transferFunds(45, chuck.savingsAccount.id, chuck.checkingAccount.id);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance()));
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));