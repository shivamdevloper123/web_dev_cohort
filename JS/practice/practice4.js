// Function.prototype.describe = function(){
//     console.log( `Function name is ${this.name}`)
// }
// function greet(name) {
//     return `Hello ! ${name}`
// }

// greet.describe()
// greet('Rahul').describe


// function Animal(name) {
//     // Initialize name property
//  this.name = name
// } 


// Animal.prototype.makeSound = function(){
  
//     const sound = "Some generic sound"
//     return sound
  
// }

// const myAnimal= new Animal("rahul")
// // console.log(myAnimal.makeSound())

//Robot charging Problem statement Solution

// function Robot(name, batteryLevel) {
//     // Initialize name and batteryLevel properties
//     this.name = name
//     this.batteryLevel = batteryLevel
// }
// // Define charge method on Robot's prototype
// Robot.prototype.charge = function(){
//   if( this.batteryLevel>=100){
//   return this.batteryLevel
//   }else if(this.batteryLevel<=80){
//     return this.batteryLevel +=20
//   }
  
//   else if(this.batteryLevel>=80 ){
//     for (let i = 1; i<=20 ; i++) {

//       console.log( this.batteryLevel++)
//         if (this.batteryLevel==100) {
//             break;
//         }
//     }
//     return this.batteryLevel
//   }
// }

// const myRobot= new Robot("robot1",30)
// console.log(myRobot.charge())

//Counter Problem statement Solution
// function Counter() {
//     // Initialize count property
//     this.count = 0
//   }
  
//   // Define increment method on Counter's prototype
//   Counter.prototype.increment = function () {
// this.count+=1
  
//   }
//   Counter.prototype.decrement = function () {
//     this.count-=1
//   }
  
// const myCount1 = new Counter("increment")
// console.log(myCount1)
// const myCount2 = new Counter("decrement")
// console.log(myCount2)

//Making a song Playlist Problem statement Solution

function Playlist() {
    // Initialize songs property

    this.songs =[]
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song){

 this.songs.push(song)
}
const myPlaylist = new Playlist()
myPlaylist.addSong("tum hi ho na")
myPlaylist.addSong("kal ho na ho")
myPlaylist.addSong(" teri diwani ")
// console.log(myPlaylist.songs)

//Shopping items Problem statement Solution

function ShoppingCart() {
    // Initialize items property
    this.items = []
  }
  // Define addItem method on ShoppingCart's prototype
  ShoppingCart.prototype.addItem = function (...price) {

    this.items.push(...price)
  }
  
  // Define getTotalPrice method on ShoppingCart's prototype
  ShoppingCart.prototype.getTotalPrice = function () {
  
   return this.items.reduce((a,price)=>a+price, 0)
  }
  
  const myShopping = new ShoppingCart()

  myShopping.addItem(10,20,30)


//   console.log("items :",myShopping.items)
//  console.log(myShopping.getTotalPrice())


//Bank Problem statement Solution


// function BankAccount(balance) {
//     // Initialize balance and transactions properties
//     this.balance = balance
//     this.transactions = []
// }

// // Define deposit method on BankAccount's prototype

// BankAccount.prototype.deposit = function(amount){
// this.balance += amount
//  this.transactions.push(`Deposited ${amount}`)

// }
// // Define withdraw method on BankAccount's prototype
// BankAccount.prototype.withdraw = function(amount){

// if(this.balance>=amount){
//     this.balance -= amount
//     this.transactions.push(`Withdraw  ${amount}`)
   
// }else{
//      this.transactions.push( "Insufficient balance")
   
//   }
// }
// // Define getTransactionHistory method on BankAccount's prototype
// BankAccount.prototype.getTransactionHistory = function(){
//  return this.transactions

// }
// const myAccount = new BankAccount(200)
// myAccount.deposit(100)

// myAccount.withdraw(50)



// console.log(myAccount.getTransactionHistory())

function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name
    this.position = position
    this.salary = salary
}

// Define applyBonus method on Employee's prototype

function Library() {
    // Initialize books property
    this.books = []
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){
return this.books.push(book)
}
// Define findBook method on Library's prototype
Library.prototype.findBook = function(title){
 return this.books.includes(title)?"Book found":"Book not found";
  
}

const myBook = new Library()

// console.log(myBook.addBook("Wings"))

// console.log(myBook.findBook("Wings"))


function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
    this.accountNumber = accountNumber
    this.holderName = holderName
    this.balance = balance
  }
  
  
  // Define deposit method on BankAccount's prototype
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
  console.log(this.holderName,":after deposit balance",this.balance)
  }
  // Define withdraw method on BankAccount's prototype
  BankAccount.prototype.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount
      console.log(this.holderName,":after withdraw balance",this.balance)
  
    } else {
      "Insufficient balance"
  
    }
  }
  // Define transfer method on BankAccount's prototype
  BankAccount.prototype.transfer = function (amount, targetAccount) {
    if (this.balance >= amount) {
      this.balance -= amount
      targetAccount.deposit(amount)
  
    }
  
  }

  const acc1 = new BankAccount(123,"rahul",100)
  const acc2 = new BankAccount(124,"mohit",200)

 acc1.deposit(100)
 acc2.deposit(100)
 
 acc1.withdraw(50)
 acc2.withdraw(100)

 acc1.transfer(100,124)