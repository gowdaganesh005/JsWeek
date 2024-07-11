
const arr=[0,1,2,34,5,6,true,"hitesh"]

// array is the collection of items
/* it can contain multiple items of multiple datatypes 
   the copy is array is of shallow array -ie they share same reference points
   they are not associative ie they cannot be accessed by arbitary strings 
   they can be accessed by 0 based indexes 
   */


const arr2=new Array(2,5,6,2,3,"kajd")
console.log(arr)
console.log(arr2)

arr.push(10)
arr.pop()

arr.unshift(9)

arr.shift()

console.log(arr.includes(10))  //returns boolean

console.log(arr.indexOf("34")) // return int

console.log(arr.join())        // it return a strings of elements of the array

console.log(arr.slice(2,4))  ///does not modifies the array and just returns array with last value not including

console.log(arr.splice(2,4))  //modifies the array and and takes 2 parameters start index and how many ele to delete and returns those elememts


console.log(arr)

