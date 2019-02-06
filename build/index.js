"use strict";

var _BankMember = _interopRequireDefault(require("./BankMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index
var chuck = new _BankMember.default("Chuck");
console.log("\nCreating ".concat(chuck.name, "'s new savings account."));
chuck.createSavingsAccount(150);
console.log("Chuck's starting savings balance: $".concat(chuck.getSavingsBalance()));
console.log("\nCreating ".concat(chuck.name, "'s new checking account."));
chuck.createCheckingAccount(500);
console.log("Chuck's starting checking balance: $".concat(chuck.getCheckingBalance()));
console.log("\nDepositing funds into savings.");
chuck.depositToSavings(150);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Depositing funds into checking.");
chuck.depositToChecking(75);
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));
console.log("Withdrawing funds from Savings");
chuck.withdrawFromSavings(6);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Withdrawing funds from Savings");
chuck.withdrawFromSavings(124);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Withdrawing funds from Savings");
chuck.withdrawFromSavings(89);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Withdrawing funds from Savings");
chuck.withdrawFromSavings(24);
console.log("Chuck's savings balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Withdrawing funds from checking");
chuck.withdrawFromChecking(200);
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));
console.log("Withdrawing funds from checking");
chuck.withdrawFromChecking(350);
console.log("Chuck's checking balance: $".concat(chuck.getCheckingBalance(), " \n"));