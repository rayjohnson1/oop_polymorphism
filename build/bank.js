"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SavingsAccount = _interopRequireDefault(require("./SavingsAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BankMember =
/*#__PURE__*/
function () {
  _createClass(BankMember, [{
    key: "memberId",
    get: function get() {
      return this._memberId;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  function BankMember(name) {
    _classCallCheck(this, BankMember);

    this._name = name;
    this._memberId = this.generateId();
  }

  _createClass(BankMember, [{
    key: "createSavingsAccount",
    value: function createSavingsAccount(startingBalance) {
      if (this._savingsAccount !== undefined) {
        console.log("".concat(this._name, " already owns a savings account."));
        return;
      }

      this._savingsAccount = new _SavingsAccount.default(this._memberId, startingBalance);
    }
  }, {
    key: "depositToSavings",
    value: function depositToSavings(amount) {
      this._savingsAccount.deposit(amount);
    }
  }, {
    key: "withdrawFromSavings",
    value: function withdrawFromSavings(amount) {
      this._savingsAccount.withdraw(amount);
    }
  }, {
    key: "getSavingsBalance",
    value: function getSavingsBalance() {
      return this._savingsAccount.balance;
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

  return BankMember;
}();

exports.default = BankMember;