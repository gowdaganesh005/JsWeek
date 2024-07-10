const num=800

console.log(num)

// number is also object in Js with the methods of its own

let score=new Number(500)
console.log(score)

//we heve a method toString using this toString we can also use the fuctions of strings

console.log(score.toString().length)

console.log(score.toFixed(2)) //appln its used in the method to calculate the actual value in shppping cart 
// returns a string

let num2=456.73890

console.log(num2.toPrecision(2))  //priority is givento whole number
//returns a string

let num3=100000000000

console.log(num3.toLocaleString())         //returns a stirng with commas to easily read in us style
console.log(num3.toLocaleString('en-IN'))   //returns a stirng with commas to easily read in indian style

console.log(num3.toExponential(2))