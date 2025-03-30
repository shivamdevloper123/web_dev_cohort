// function totalStars(starLevels) {
//     let count = 0
//     for (let i = 0; i < starLevels.length; i++) {
//         for (let j = 0; j < starLevels[i].length; j++) {
//            console.log(`i is ${i} and j is ${j} : ${starLevels[i].length}  value of count ${count ++}`)


//         }
//     }
//     return count
// }

// let arr = [["*", "*", "*"], ["*", "*"], ["*"]]

// console.log("final result: ",totalStars(arr))
// function totalStars(starLevels) {
//     let count = 0
//     for (let i = 0; i < starLevels.length; i++) {
//     count += starLevels[i].length
//     }
//     return count
// }

// let arr = [["*", "*", "*"], ["*", "*"], ["*"]]

// console.log("final result: ",totalStars(arr))

// function totalPrice(prices) {
//     let totalCost = 0
//      for(let i =0;i<prices.length;i++){
//       console.log( `${totalCost} + ${prices[i]} = ${totalCost = totalCost +prices[i]}`)
//      }
//      return totalCost
//    }
//    let pricesArr = [2.4,4,3,5.3]
//    console.log(totalPrice(pricesArr))

// function shinyDiamondRug(n) {
//     let result = "";

//     // Upper part of the diamond
//     for (let i = 1; i <= n; i++) {
//         let spaces = " ".repeat(n - i);

//       let stars = "*".repeat(2 * i - 1);
//       result +=  "\n"+ spaces + stars;
//     //   if (i < n) result += "\n"; // Add newline except for the last line
//     }

//     // Lower part of the diamond
//     for (let i = n-1 ; i >= 1; i--) {
//       let spaces = " ".repeat(n - i);
//       let stars = "*".repeat(2 * i - 1);
//       result += "\n"+  spaces + stars;

//     }

//     return result;
//   }

//   // Example usage:
//   console.log(shinyDiamondRug(50));

// function invertedMountain(n) {
//     let result = ""
//     for (let i = n; i >= 1; i--) {
//         let star = "*".repeat(i )
//         result += star 
//         if (i>1) {
//             result += "\n"
//         }
//     }
//     return result
// }

// console.log(invertedMountain(4))

// function addGuest(guestList) {
//     // Add the newGuest to guestList and return the updated list
    
// let result = guestList.filter((num)=>num === 3)

// return guestList.replace(result)
// }
// let guestList =[1,2,35,3,46,32,3,5] 

// console.log(addGuest(guestList))

// function writeLoveLetter(message, name) {
//     // Add name at the start of the message and return updated array
//   message.unshift(name)
//     return message
// }

// let msg = ["Add name at the start of the message and return updated array"]
// let name ="sunidhi"
// console.log(writeLoveLetter(msg,name))
// let guestList =[1,2,35,3,46,32,3,5] 

// let index = guestList.indexOf(2)

// console.log(guestList.splice(index,1))


Object.prototype.chai = function() {
  return "hello ! Good Morning "
}

const obj = {
    name :"Green Tea",
    color:"Green"
}


// console.log("Before calling function :",obj)
// console.log(obj.chai())
const myTeas = ["Orange tea","Lemon tea"]
console.log(myTeas,"\n",myTeas.chai())
