let numbers = [1, 6, 3, 4, 5, 6, 7, 8]

// numbers.forEach(val => {  //it nevers returns any value
//     console.log(val)
// })


let newArray = numbers.map(val => val * 2) //it always return new array of all new values
console.log(newArray)


let newArray1 = numbers.find(val => val > 4)  //as soon as condition is true, element iteration is stopped and true value is returned 
console.log(newArray1)


let newArray2 = numbers.filter(val => val % 2 == 0) //it return new array of conditiones fullfilled
console.log(newArray2)

let newArray3 = numbers.slice(1,5) //last number is excluded
console.log(newArray3)

let included = numbers.includes(98)
console.log(included)

let subElementRemoved = numbers.splice(1,5) //last number is included
console.log(subElementRemoved)
console.log(numbers)