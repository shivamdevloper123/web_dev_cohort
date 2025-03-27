function gradeCal(marks) {
    let grade ;
    
    if (marks>=90) {
         grade = "A"
    }
    else if (marks>=80) {
         grade = "B"
    }
    else if (marks>=70) {
         grade = "C"
    }
    else if (marks>=60) {
         grade = "D"
    }
  else{
    grade = "F"
  }
  return grade
}

// console.log(`Student's Grade is ${gradeCal(55)}`)

function arraySum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        
        sum = sum + array[i]
    }
    return sum;
}

let array = [2,34,5,64,7,4,37,31,74,6,37,3]

console.log(arraySum(array))

