//String interpolation
name1 ="pritesh Kumar"
console.log("my name is "+name1)
console.log(`my name is `+name1)
console.log(`my name is ${name1}`)
//ECMAScript 6
function createAccount(name,balance){
  return{
    accountHolder:name,
    Balance:balance,
    deposit: function(amount){
      if(amount>0){
        this.Balance+=amount;
        console.log(`${amount} deposited successfully. Current balance is ${this.balance}`);
      }else{
        console.log(`deposited amount should be greater than 0`);
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`₹${amount} withdrawn successfully. Current balance: ₹${this.balance}`);
      } else if (amount > this.balance) {
          console.log("Insufficient balance.");
      } else {
          console.log("Withdrawal amount must be greater than 0.");
      }
  },
  getBalance: function () {
    console.log(`Account holder: ${this.accountHolder}, Current balance: ₹${this.balance}`);
    return this.balance;
}
    
  }
}
const myAccount=createAccount("Pritesh",50000)

// myAccount.deposit(2000); 
// myAccount.withdraw(1000); 
// myAccount.withdraw(7000); 
// myAccount.getBalance();

 let name4="Hemu"
 greet="welcome to the session "+name4
 console.log(greet)

