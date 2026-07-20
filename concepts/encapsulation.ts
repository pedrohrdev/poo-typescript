/* 
Encapsulation is a fundamental concept in object-oriented programming (OOP)
that refers to the bundling of data (attributes) and methods (functions)
that operate on that data into a single unit, typically a class. It
restricts direct access to some of an object's components, which can
prevent the accidental modification of data and promote a clear
interface for interacting with the object.
*/

class BankAccount {

    // Private property to hold the account balance
    private balance: number;

    // Constructor to initialize the account with a starting balance
    constructor(initialBalance: number) {

        this.balance = initialBalance;

    }

    // Public method to deposit money into the account
    public deposit(amount: number): void {

        if(amount > 0) {
            
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
            
        }

    }

};

const myAccount = new BankAccount(1000);
myAccount.deposit(500); // Deposited: $500. New balance: $1500.
