console.log(Math)
// Maths is itself a class with functions to it  and comes by default

console.log(Math.abs(-4))

console.log(Math.round(5.6))

console.log(Math.ceil(4.1)) /// if number even exceeds by 0.001 it wil take higher value ie 5

console.log(Math.floor(4.9)) /// if number is exceeds by 0.9999 it will take lower value ie 4

console.log(Math.max(4,3,1,5,6,4,7))
console.log(Math.min(4,3,-1,5,-6,4,7))

//IMPORTANT RANDOM FUNCTION OF MATH

console.log(Math.random()) /// random number always lie in between 0 and 1

console.log(Math.random()*10) //value is between 0 to 10

console.log((Math.random()*10)+1) //to avoid 0

console.log(Math.floor((Math.random()*10)+1)) //to get the whole number without the fraction

/// for random in given range of values

min=1
max=6
//General formula to get value in given range of values
console.log(Math.floor(Math.random()*(max-min+1)+min))
