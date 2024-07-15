
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
