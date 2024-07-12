//singleton using the construvctor

let user=new Object()  //singleton object  same as literal but its a singleton while literal oone is not singleton

console.log(user)

user.id="123abc"
user.name="ganesh"
user.log=[1,5,32.4,6]

console.log(user)

let user2={
    fullname:{
        userfullname:{
            first:"ganesh",             //nested objects can be used easily
            last:"gowda"
        }
    }
}


console.log(user2.fullname?.userfullname.first)     // nested values can be accessed using dot  
//here ? is to make a check whether the value exists or not if fullname exists then perform 
let  obj1={1:"a",2:"b"}

let  obj2={3:"a",4:"b"}

let obj3={obj1,obj2}
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

let obj4=Object.assign({},obj1,obj2) // target,source 1,source2  if target is ommitted then the first obj is assigned as target

console.log(obj4)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

let obj5={...obj1,...obj2}  // spreading the objects and using them

console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



let users=[
    {
        id:983
    },
    {
        id:983
    },
    {
        id:34
    }
]
 

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('id'))

