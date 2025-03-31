
function addCarColor(car, color) {
  // Add color property to the car object
  this.car = car
  this.color = color

  if (this.car.brand !== "" && this.car.model !== "" && this.color.color !== "") {
    
    return {
      
      
      brand: this.car.brand,
      model: this.car.model,
      color: this.color.color
    }

  }else{
    return "Invalid color"
  }
}

function search(myCar){
  if(Object.keys(myCar)!==Object.keys(myCar)){
    delete Object.keys(myCar) 
    return{...myCar}
  }
}

function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  return Object.entries(obj)
}

function cleanObject(obj) {
  // Remove all properties with null or undefined values
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key]; // Proper way to remove properties
    }
  }
  return obj;
 
}

function deepClone(obj) {
  // Return a deep copy of obj
  if(obj=== null || typeof obj !=="object"){
    return obj;
  }
  let clone = Array.isArray(obj)?[]:{};
  for(let key in obj){
    clone[key]= deepClone(obj[key])
  }
  return clone;
}


function getNestedObj(obj,keyPath) {
  
  if (typeof obj !== "object" || obj === null) return undefined;
  
return keyPath.split('.').reduce((acc, key) => acc && acc[key], obj)
}
const myCar = {keyPath:"address.city", address:{city:"faridabad",state:"haryana"},brand: "toyota", model: "fortuner" }
console.log(getNestedObj(myCar,myCar.keyPath))
// console.log(search(myCar))
// console.log(objectToArray(myCar))
// console.log(cleanObject(myCar))

const carColor = { color: "white" }

// console.log(addCarColor(myCar, carColor))