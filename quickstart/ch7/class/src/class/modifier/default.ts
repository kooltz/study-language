class Account {
    balance: number;

    get getBalance() {
        return this.balance;
    }

    set setBalance(amount: number) {
        this.balance += amount;
    }

    deposite(depositAmount: number) {
        this.setBalance = depositAmount;
    }

    constructor(defaultBalance: number = 0, protected bankName: string = "happy bank", readonly interestRate: number = 0.1) {
        this.balance = defaultBalance;
    }

    getInterestRate() {
        return this.interestRate;
    }

    getDefaultBalance() {
        // return this.defaultBalance;
    }
}

class MyAccount extends Account {
    constructor() {
        super();
        this.deposite(1000);
        this.setBalance = 1000;
        console.log(`2번) 적금 : ${this.balance}원, ${this.getBalance}원 /
        이율 : ${this.interestRate}, ${this.getInterestRate()}% /
        은행명 : ${this.bankName}`);
    }
}

let account = new Account();
console.log(`1번) 적금 : ${account.balance}원, ${account.getBalance}원 /
        이율 : ${account.interestRate}, ${account.getInterestRate()}%`);

let myAccount = new MyAccount();
