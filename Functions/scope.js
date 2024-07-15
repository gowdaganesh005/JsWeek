// global scope 

let a=10
const b=30
var c=40

if (true){

    //block scope
    let  a=100
     const b=89
    var c=70

    console.log(`Inner:a: ${a} b: ${b} c:${c} `)
}


console.log(`outer:a: ${a} b: ${b} c:${c} `)

// Inner:a: 100 b: 67 c:70          here var doesnt obey the local scope and hence its avoided 
// outer:a: 10 b: 30 c:70            c in outer should have been 40 as set earlier     ** note : the scope in console and in node should be different



//nested scope

function one(){
    let name="ganesh"
    function two(){
        const website=" twitter"
        console.log(name)
    }
    two()
    // console.log(website)       ReferenceError: website is not defined / "cannot access outside the  function scope"

}

one()                 // same in the "if "and "for" and block of the code 




// two types of declaring function

console.log(addone(10))

function addone(num){
    return num+1
}



// addtwo(20)         throws an error and cannot execute 

const addtwo=function(num){
    return num+2
}


console.log(addtwo(20))



