//this is a key word in Js that denotes the current reference

console.log(this)  //{} ie the global context here in the node is an empty object  
// in browser its differnt and is window because the gobal context over there is the page and elements

const user={
    username:"ganesh",
    id:5092,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to the website`)
        console.log(this)
    }
}


user.welcomeMessage()   // here the context is the object

// function add2(num){
//     console.log(num+2)
//     console.log(this)                // the this here that is the context is some objects that has some other value
// }
// add2(6)

// const add2=function(num){
//     console.log(num+2)
//     console.log(this)  
//               }              // same as noraml function
// add2(6)
 
const  add2=(num)=>{                //without the keyword of the function we can have the function using => this is called arrow function
    console.log(num+2)              
    console.log(this)                // here while defining like a arrow function the context is an empty object unlike normal function        
}
add2(6)


// another syntax for arrow function is 


//explicitly returning function
const add00=(num1,num2)=>{return num1+num2} //if {} is used we need to write return keyword

/// implicitly return function
const add01=(num1,num2)=> num1+num2    // here the js just understand that only that is to be returned do no need to write keyword return and omit it

const add02=(num1,num2)=> (num1+num2)    // here the () canbe  used and no need to use return keyword 
 
const add03=(obj)=>({name:"ganesh",id:98})   // here if we need to return object without keyword return we must use the () 


console.log(add03({}))







