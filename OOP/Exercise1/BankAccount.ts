class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount:number):void{
        if(amount>0){
            this.balance+=amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        }
    }

    withdraw(amount:number):void{
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        }
    }
}

const user1 = new BankAccount("987654321", 1000);
user1.deposit(500);
user1.withdraw(200);