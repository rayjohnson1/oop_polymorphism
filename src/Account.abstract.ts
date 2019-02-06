//Account.abstract.ts
export default abstract class Account {
    
    protected _id: number;
    protected _memberId: number;
    protected _balance: number;

    public get id(): number{
        return this._id;
    }

    public get memberId() : number {
        return this._memberId;
    }
    
    public get balance() : number {
        return this._balance;
    }

    constructor(memberId: number, startingBalance: number){
        this._memberId = memberId;
        this._balance = startingBalance;
        this._id = this.generateId();
    }

    public deposit(amount: number): void{
        this._balance += amount;
    }
    
    public abstract withdraw(amount: number): void | false;

    public transferFunds(amount: number, targetAccount: Account): void {
        if(this.withdraw(amount) === false){
            console.log("Cannot transfer funds!");
            return;
        }

        targetAccount.deposit(amount);
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