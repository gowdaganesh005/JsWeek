//for special

let arr=["js","java","python","go","cpp"]

// for (const i of arr) {   // iterating all the element
//     console.log(i)
// }

myobj={
    name:"ganesh",
    id:9879876
}

// for (const i of myobj){
//     console.log(i)              objects are not iterable using the for of loop

// }

for (const key in myobj) {
    console.log(key+":"+myobj[key])          // prints the key of the objects and value
    
}

// for of takes the type of the object and the for in takes the key of the object



// for in map

let mpp=new Map()
mpp.set("js","javascript")
mpp.set("cpp","C++")
mpp.set("go","golang")
   
    

//console.log(mpp)

// for (const [i,j]  of mpp) {
//     console.log(i +":==: "+ j)
    
// }


// we cannot use for in map 
// but we can usee for in array

for (const key in arr) {
    //console.log(key)       // here only the indexxes are returned which is key for each elem in array
    console.log(arr[key])
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// special methods in the array class to apply a function on all elements of the arry

arr.forEach(function (item){console.log(item)})

arr.forEach( (item)=>{console.log(item)})   // arrow sunctions can also be used

function printme(item){
    console.log(item);
}
arr.forEach(printme)        // we can declare function ooutside the for each function and pass the reference to the function and not the fuction


// for each method doesnt returns anything

let values=arr.forEach( (item)=>item)     

console.log(values)     //undefined 

// if we want it compulsarily then

let values2=[]
arr.forEach((item)=>{
    values2.push(item)
})

console.log(values2)  

// or we can use filter

let values3=arr.filter((item)=>item)
console.log(values3);



