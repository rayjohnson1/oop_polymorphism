//BankMember.ts
import Account from './Account.abstract';
import SavingsAccount from './SavingsAccount';
import CheckingAccount from './CheckingAccount';
import MiscAccount from './MiscAccount'

type AccountsHash = { [AccountId: number]: Account };

export default class BankMember {

    private _memberId : number;
    private _name : string;

    private _savingsAccount: SavingsAccount;
    private _checkingAccount: CheckingAccount;
    private _accountsHash: AccountsHash;
    
    public get memberId() : number {
        return this._memberId;
    }

    public get name() : string {
        return this._name;
    }

    public get savingsAccount(): SavingsAccount{
        return this._savingsAccount;
    }

    public get checkingAccount(): CheckingAccount{
        return this._checkingAccount;
    }

    public get accountsHash(): AccountsHash{
        return this._accountsHash;
    }

    constructor(name: string){
        this._name = name;
        this._memberId = this.generateId();
        this._accountsHash = {};
    }

    public createSavingsAccount(startingBalance: number): SavingsAccount{
        if(this._savingsAccount !== undefined){
            console.log(`${this._name} already owns a savings account.`);
            return;
        }

        this._savingsAccount = new SavingsAccount(this._memberId, startingBalance);
        this._accountsHash[this._savingsAccount.id] = this._savingsAccount;
        return this._savingsAccount;
    }

    public createCheckingAccount(startingBalance: number): CheckingAccount{
        if(this._checkingAccount !== undefined){
            console.log(`${this._name} already owns a checking account.`);
            return;
        }

        this._checkingAccount = new CheckingAccount(this._memberId, startingBalance);
        this._accountsHash[this._checkingAccount.id] = this._checkingAccount;
        return this._checkingAccount;
    }

    public createMiscAccount(name: string, startingBalance: number): MiscAccount{
        const newAccount = new MiscAccount(name, this._memberId, startingBalance);
        this._accountsHash[newAccount.id] = newAccount;
        return newAccount;
    }

    public depositToSavings(amount: number): void{
        this._savingsAccount.deposit(amount);
    }

    public withdrawFromSavings(amount): void{
        this._savingsAccount.withdraw(amount);
    }

    public depositToChecking(amount: number): void{
        this._checkingAccount.deposit(amount);
    }

    public withdrawFromChecking(amount): void{
        this._checkingAccount.withdraw(amount);
    }

    public getSavingsBalance(): number{
        return this._savingsAccount.balance;
    }

    public getCheckingBalance(): number{
        return this._checkingAccount.balance;
    }

    public getMiscAccountBalance(accountId: number): number {
        return this._accountsHash[accountId].balance;
    }

    public transferFunds(amount: number, fromId: number, toId: number){
        
        const from: Account = this._accountsHash[fromId];
        const to: Account = this._accountsHash[toId];

        from.transferFunds(amount, to);

    }

    private generateId(): number{
        const possibilities = '1234567890';
        let generated = '';
        for(let i = 0; i < 6; i++){
            generated += possibilities.charAt(Math.random() * possibilities.length);
        }
        return parseInt(generated);
    }

}