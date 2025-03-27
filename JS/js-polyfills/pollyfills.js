if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // Current Object ki taraf point karta hai

    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (accumulator) {
        //Using .call(undefined, ...) ensures that userFn runs in a strict function mode without an unexpected this value.
        //The native Array.prototype.reduce() does not provide a specific "this' value to the callback unless explicitly bound.
        accumulator = userFn.call(undefined,
          accumulator, this[i], i, this)

      } else {
        accumulator = this[i]
      }
    }
    return accumulator
  }
}

if (!Array.prototype.myFind){
  Array.prototype.myFind = function (userFn) {

  for (let i = 0; i < this.length; i++) {
    if (userFn(i)) {
      return i
    }

  }
}
}

if (!Array.prototype.myFindIndex){
Array.prototype.myFindIndex = function (userFn) {

  for (let i = 0; i < this.length; i++) {
    if (userFn(i)) {
      return i
    }

  }
}
}

if (!Array.prototype.mySome){
  Array.prototype.mySome = function (userFn) {
  for (let i = 0; i < this.length; i++) {
    if (userFn(this[i])) {
      return true
    } else {
      return false
    }

  }
}
}

if (!Array.prototype.myEvery){
  Array.prototype.myEvery = function (userFn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (userFn(this[i], i)) {
      return false
    }
  }
  return true
}}

if (!Array.prototype.myIncludes){
  Array.prototype.myIncludes = function (thisArg) {
  for (let i = 0; i < this.length; i++) {
    // console.log(`${thisArg} and array values ${this[i]}`)
    if (thisArg === this[i]) {

      return true
    }
  }
  return false
}
}

if (!Array.prototype.myIndexOf){
  Array.prototype.myIndexOf = function (thisArg) {
  for (let i = 0; i < this.length; i++) {
    // console.log(`${thisArg} and array values ${this[i]}`)
    if (thisArg === this[i]) {

      return i
    }
  }
  return -1
}
}

if (!Array.prototype.myJoin){
  Array.prototype.myJoin = function (separator) {
  let result = ""

  for (let i = 0; i < this.length; i++) {
    if (this[i] === 0) {
      result = this[0]

    } else {
      result = result + separator + this[i]
    }
  }
  return result
}
}


if (!Array.prototype.myConcat){
  Array.prototype.myConcat = function () {
  let result = []

  for (let i = 0; i < this.length; i++) {
    result.push(this[i])
  }

  for (let j = 0; j < arguments.length; j++) {

    if (Array.isArray(arguments[j])) {

      const tempArray = arguments[j]

      for (let k = 0; k < tempArray.length; k++) {

        result.push(tempArray[k])

      }
    } else {
      result.push(arguments[j])
    }

  }
  return result
}
}

if (!Array.prototype.mySlice){
  Array.prototype.mySlice = function (start, end) {
  let result = []
  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = this.length - 1
  }
  for (let i = 0; i < this.length; i++) {
    if (i >= start && i < end) {
      result.push(this[i])
    }
  }
  console.log(this)
  return result
}
}

if (!Array.prototype.myReverse){
  Array.prototype.myReverse = function () {

  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    let temp = this[i]

    this[i] = this[j]
    this[j] = temp


  }
  return this
}
}



const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable

// Real Signature ko samjo - No return, function input, value, index
// calls my fn for every value

// const ret = arr.forEach(function (value, index) {
//   console.log(`Value at Index ${index} is ${value}`);
// });

// console.log(`Ret is`, ret);

// const myRet = arr.myForEach(function (value, index) {
//   console.log(`My forEach Value at Index ${index} is ${value}`);
// });

// console.log(`My Ret is`, myRet);

// Signature .map
// Return? - New Array, Each ele Iterate, userFn

const n = arr.map((e) => e * 2);
const n2 = arr.myMap((e) => e * 3);
// console.log(n);
// console.log(n2);

// Filter
// Signature: Return - new array | input: userFn
// agar user ka function True return karta hai toh current value ko new array mein include kar leta hai

const n3 = arr.filter((e) => e % 2 === 0);
const n4 = arr.myFilter((e) => e % 2 === 0);
// console.log(n3);
// console.log(n4);

//Reduce
//Signature: Return karta h ek total value ko vo chahe array, object ,single number, String ho jo ki callback function ke andar bana ho
//It returns a single value, which can be a number, object, string, or array (if explicitly built inside the callback).
// variable that accumulates the result
// If the initialValue exists, we call the callback function on the existing  element and store in accumulator

const n5 = arr.myReduce(function (acc, curr) {
  acc.push(curr ** 2)
  return acc
}, [])
// console.log("reduce method:", n5)

// Find
//Signature: return the first satisfy value
//agar array me koi bhi condition ke according value nahi mili to ye undefined return karega
//ye ek callbackFun(userFn) or thisArgument leta h

const findMethod = arr.myEvery((e) => e < 2)
// console.log(findMethod)

const findIndexMethod = arr.myEvery((e) => e < 2)
// console.log(findIndexMethod)

const someMethod = arr.myEvery((e) => e < 2)
// console.log(someMethod)

const everyMethod = arr.myEvery((e) => e < 2)
// console.log(everyMethod)

const builtIn_Includes = arr.myIncludes(7)
// console.log(builtIn_Includes)

const builtIn_join = arr.join(",")
// console.log(builtIn_join)

const arr1 = [7, 8, 9, 10]
const arr2 = [11, 12, 13, 14]
const arr3 = [15, 16, 17, 18]
const builtIn_concat = arr.myConcat(arr1, arr2, arr3)
// console.log(builtIn_concat)

const builtIn_slice = arr.mySlice(2, 5)
// console.log(builtIn_slice)
const builtIn_reverse = arr1.myReverse() 
console.log(builtIn_reverse)
