function increment() {
    let count =0
    
    return function(){
        count++
        return count
    }
}

let x =increment()
let y =increment()



console.log(x())
console.log(x())
console.log(x())
console.log(x())
console.log(y())
console.log(y())
console.log(x())
console.log(y())