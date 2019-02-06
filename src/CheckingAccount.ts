//CheckingAccount.ts
import Account from './Account.abstract';

export default class CheckingAccount extends Account{

    private _maxWithdrawalAmount: number;

    constructor(memberId: number, startingBalance: number){
        super(memberId, startingBalance);

        this._maxWithdrawalAmount = 250;
    }

    public withdraw(amount: number): void | false{
        
        if(amount > this._maxWithdrawalAmount){
            console.log(`You can not withdraw more than ${this._maxWithdrawalAmount} at a time!`);
            return false;
        }
        if(amount > this._balance){
            console.log("Insufficient Funds!");
            return false;
        }

        this._balance -= amount;
        
    }

}