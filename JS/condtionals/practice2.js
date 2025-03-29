/*
Here is a table listing common **Array polyfills** in JavaScript:  
Method	Necessity	Description

forEach()	✅ High	Iterates over an array and executes a function for each element.

map()	✅ High	Creates a new array by applying a function to each element.

filter()	✅ High	Returns a new array with elements that pass a test function.

reduce()	✅ High	Reduces an array to a single value using an accumulator function.

find()	✅ High	Returns the first element that satisfies a test function.

findIndex()	✅ High	Returns the index of the first element that satisfies a test function.

some()	✅ High	Checks if at least one element satisfies a test function.

every()	✅ High	Checks if all elements satisfy a test function.

includes()	✅ High	Checks if an array contains a specific value (not available in IE11).

indexOf()	✅ High	Returns the index of the first occurrence of a value.

lastIndexOf()	✅ Medium	Returns the index of the last occurrence of a value.

join()	✅ Medium	Joins all elements into a string with a separator.

concat()	✅ Medium	Merges two or more arrays into a new array.

slice()	✅ Medium	Returns a shallow copy of a portion of an array.

splice()	✅ Medium	Adds/removes elements from an array at a specific index.

reverse()	✅ Medium	Reverses the order of elements in an array.

sort()	✅ Medium	Sorts elements based on a compare function.
 
*/

// function total(arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i]
//     }
//     return result
// }
// console.log("using function total : ", total(arr))

const arr = [1, 2, 3, 4, 5, 6,]

const mapping = arr.map((e) => e * 2)
// console.log("using map method : ", mapping)

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const ret = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1

    return acc
}, {})

// console.log("using reduce method : ", ret)

const findMethod = arr.find((e) => e > 3)
// console.log(findMethod)

const someMethod = arr.some((e) => e > 3)
// console.log(someMethod)

const array = [{fruits:"orange"}]
arr[5] = 9
// console.log(arr[2])



const arr4 = [1,2,3,4,5]
const arr5 = [6,7,8,9,10]
const arr6 = ["Ram","Shayam","Harry","Paul",true]


// console.log(arr4.)
