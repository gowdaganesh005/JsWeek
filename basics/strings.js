let name ="Ganesh"


console.log(`this is a potent and new way to actually write a string .My name is ${name} and i am learning JS in a Week `);
//string interpolation

// using constructor

let game= new String("Rahul sharma")
// string is not an array is like a key value pair as string is an object

console.log(game.length)
console.log(game.includes("sha"))
console.log(game.charAt(2))
console.log(game.indexOf("m"))
console.log(game.toUpperCase())
console.log(game.trim())  /// to remove starting space and end space

let newstr=game.substring(3,6)
console.log(newstr)

newstr=game.slice(-7,-4)  //negative value is accepted rather than substring
console.log(newstr)

game=game.replace("sharma","verma")
console.log(game)

let arr=game.split(" ")
console.log(arr)
