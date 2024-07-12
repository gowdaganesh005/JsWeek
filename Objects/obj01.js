// singleton 

//object literals

let sy=Symbol("key1")
let sy2=Symbol("key2")

const JsUser={             //keys are strings 
    name:"ganesh",
    age:18,
    city:"bengaluru",
    isLog:false,
    "email":"gowda@ganesh.com",
    //sy:"my key 1"         // the key is here actually a string and not a symbol so 
    [sy]:"my key 1" ,        // aactual syntax
    sy2:"my key 2"


}
console.log(JsUser.name)
console.log(JsUser["city"])
//console.log(JsUser.email)  // not possible and we must use this
console.log(JsUser["email"])
//  symbol is accessed by

console.log(JsUser[sy])
console.log(JsUser)  // here we can see the difference in the symbol in symbol as symbol and string


JsUser.email="ganesh@google.com"

//Object.freeze(JsUser)      // does not changses even if want to change
JsUser.email="ganesh@gmail.com"

console.log(JsUser)



JsUser.greeting=function(){
    console.log(`Hello Js User , ${this.name}`)
}

console.log(JsUser.greeting)
JsUser.greeting()