//Static Methods and Properties

class Governor {
  static education = "He has a Harvard PhD.";
  static family = "He has multiple children.";
  static policy = "He has ambition";
  disposition() {
    return "He is totally insane and " + Governor.policy;
  }
}
console.log(Governor);
console.log(Governor.disposition);

//Inheritance
class Person {
  constructor(name, age, hair, eyes, certificate = true) {
    this.name = name;
    this.age = age;
    this.hair = hair;
    this.eyes = eyes;
    this.legs = 5;
    this.certificate = certificate;
  }
  drinks() {
    console.log("drinks Whiskey!");
  }
  wearsHat() {
    console.log("has a Chapeau");
  }
  hatesCats() {
    console.log("believes that cats are just rats with fur!");
  }
}
class PostalWorker extends Person {
  // constructor(name, age, hair, eyes, certificate){
  //     super(name, age, hair, eyes, certificate)

  // }
  wearsHat() {
    console.log("wears baseball caps only!");
  }
  deliversPackage() {
    console.log("by throwing packages against the front door.");
  }
}
class Chef extends Person {}

const Elvis = new PostalWorker("Elvis", "23", "black", "blue", false);
const PostalWorker1 = new PostalWorker("Jimmy", "45", "red", true);
const PostalWorker2 = new PostalWorker("Bob", "65", "bald", true);
const Chef1 = new Chef();
const Chef2 = console.log(Elvis);

//Hungry for More
//Banks Accounts take it a step further

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = "Greg";
    this.balance = 5500;
    this.acctNum = 4757;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled) {
    super();
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw(amount) {
    if (this.balance < 0 && this.overdraftEnabled === true) {
      console.log("You are broke! But have a good time anyway!");
    } else {
      console.log("Insufficient funds available.");
    }
  }
}
class SavingsAccount extends BankAccount {
  withdraw(amount) {
    console.log("No withdrawal is allowed at this time!");
  }
}
const myAccount = new BankAccount();
console.log(myAccount.balance);
myAccount.deposit(5000);
console.log(myAccount.balance);
const myAccount = new CheckingAccount();
myAccount.withdraw(15000);
console.log(myAccount.balance);
const myAccount = new SavingsAccount();
myAccount.withdraw(1);
console.log(myAccount.balance);
