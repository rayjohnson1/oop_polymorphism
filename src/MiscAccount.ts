//MiscAccount.ts
import Account from "./Account.abstract";

export default class MiscAccount extends Account{

    private _name: string;

    public get name(): string {
        return this._name;
    }

    constructor(name: string, memberId: number, startingBalance: number){
        super(memberId, startingBalance);
        this._name = name;
    }

    public withdraw(amount: number): void {
        if(amount > this._balance){
            console.log("Insufficient Funds!");
            return;
        }

        this._balance -= amount;
    }

    public transferFunds(amount: number, targetAccount: Account): void {
        if(amount > this._balance){
            console.log("Insufficient fund's cannot complete transfer!");
            return;
        }

        this.withdraw(amount);
        targetAccount.deposit(amount);
    }

}