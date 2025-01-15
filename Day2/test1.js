// var name1="lpu"
// console.log(name1)

// var name1="Lovely professional"
// console.log(name1)

// //const and let
// const num=10

// console.log(num)
// // num=40
// console.log(num)
// let msg="welcome"
// console.log(msg)

//simulates basic banking operations such as creating an account, depositing  money, and withdrawing money using functions in javascript

// Banking System
function createAccount(name, initialBalance) {
  return {
      accountHolder: name,
      balance: initialBalance,
      deposit: function (amount) {
          if (amount > 0) {
              this.balance += amount;
              console.log(`₹${amount} deposited successfully. Current balance: ₹${this.balance}`);
          } else {
              console.log("Deposit amount must be greater than 0.");
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
  };
}

// Example usage
const myAccount = createAccount("Navneet", 5000);

myAccount.getBalance(); // Show current balance
myAccount.deposit(2000); // Deposit money
myAccount.withdraw(1000); // Withdraw money
myAccount.withdraw(7000); // Attempt to withdraw more than balance
myAccount.getBalance(); // Show updated balance
