"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Account.abstract.ts
var Account =
/*#__PURE__*/
function () {
  _createClass(Account, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "memberId",
    get: function get() {
      return this._memberId;
    }
  }, {
    key: "balance",
    get: function get() {
      return this._balance;
    }
  }]);

  function Account(memberId, startingBalance) {
    _classCallCheck(this, Account);

    this._memberId = memberId;
    this._balance = startingBalance;
    this._id = this.generateId();
  }

  _createClass(Account, [{
    key: "deposit",
    value: function deposit(amount) {
      this._balance += amount;
    }
  }, {
    key: "transferFunds",
    value: function transferFunds(amount, targetAccount) {
      if (this.withdraw(amount) === false) {
        console.log("Cannot transfer funds!");
        return;
      }

      targetAccount.deposit(amount);
    }
  }, {
    key: "generateId",
    value: function generateId() {
      var possibilities = '1234567890';
      var generated = '';

      for (var i = 0; i < 6; i++) {
        generated += possibilities.charAt(Math.random() * possibilities.length);
      }

      return parseInt(generated);
    }
  }]);

  return Account;
}();

exports.default = Account;