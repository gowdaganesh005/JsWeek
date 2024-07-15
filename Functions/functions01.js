
// usual functions are similar to c ans cpp

function myname(){
    console.log("ganesh");
}

myname()

function add(num1,num2){   // parameters type need not to be mentioned and
    return num1+num2
}

let sum0=add(4,6)   //arguments

//but js cannot have ides of what it is adding so

let sum=add(6,"gg")
let sum2=add("gg"+"7")

console.log(sum2);//output is gg7undefined because it performs the addition of strings in the arguments and passes as first argument 
//so corrected code is

sum2=add("gg","7")
console.log(sum2)

//default values

function call(name="user"){
    console.log(`${name} is my name`)
}

call("ganesh")
call()   // is no arguments is passed then default is considered


//passing unkmown number of elements in the functions

function shoppingList(...num){     // here ... is the rest operator and is used earlier in spread operator

    console.log(num)
}

shoppingList(300,2,222,53,654,776)

function numlist(val1,val2,...num){
   console.log(num)
}
numlist(556,55,34,53,43)  // here we have a llist but val1 is first ele and val2 is second so num is remaining

numlist(45,67)

// function avc(num1,num2){
//     return num1,num2
// }                             CANNOT return multiple values

// let n1=avc(9,6)
// console.log(n1)

//passing objects in functions

let user={
    name:"gnaesh",
    id_no:3029
}

function pirntobjdata(obj){
    return `${obj.name} has game id of ${obj.id}`
}

console.log(pirntobjdata(user))      //type check need to be made so to avoid undefined value

