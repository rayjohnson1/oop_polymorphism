"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Account2 = _interopRequireDefault(require("./Account.abstract"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SavingsAccount =
/*#__PURE__*/
function (_Account) {
  _inherits(SavingsAccount, _Account);

  function SavingsAccount(memberId, startingBalance) {
    var _this;

    _classCallCheck(this, SavingsAccount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SavingsAccount).call(this, memberId, startingBalance));
    _this._percentInterestGrowth = 3;
    _this._maxMonthlyWithdrawals = 3;
    _this._currentMonthlyWithdrawls = 0;
    return _this;
  }

  _createClass(SavingsAccount, [{
    key: "addMonthlyInterestGrowth",
    value: function addMonthlyInterestGrowth() {
      this._balance += this._balance * (this._percentInterestGrowth / 100);
    }
  }, {
    key: "withdraw",
    value: function withdraw(amount) {
      if (this._currentMonthlyWithdrawls === this._maxMonthlyWithdrawals) {
        console.log("Max monthly withdrawal limit has been reached, Please wait until next month.");
        return false;
      }

      if (amount > this._balance) {
        console.log("Insufficient funds!");
        return false;
      }

      this._balance -= amount;
      this._currentMonthlyWithdrawls++;
    }
  }]);

  return SavingsAccount;
}(_Account2.default);

exports.default = SavingsAccount;