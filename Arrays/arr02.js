let arr=[1,2,3,4]
const arr2=[5,6,7,8]

//arr.push(arr2)    // since the array in Js can contain multiple types so when we push we get array in array
console.log(arr)

arr=arr.concat(arr2)  //concat returns a new array

console.log(arr)

let arr3=[...arr,...arr2]
console.log(arr3)

let arr4=[1,2,3,[4,5,3,6],4,6,[4,3,[4,6,8,2],5,1,8],5,4 ]
console.log(arr4.flat(Infinity))  // makes all the sub arrays into one single array and returns new array


console.log(Array.isArray("hitesh"))

console.log(Array.from("ganesh"))

console.log(Array.from({name:"ganesh"}))  //different case it cannot create a value of the object to array


score1=98
score2=89
score3=55

console.log(Array.of(score1,score2,score3))



