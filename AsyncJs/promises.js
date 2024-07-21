const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async tsk is complete')
        resolve()

    },1000)
})

promise1.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("second promise task is completed")
        resolve()
    },1000)
    
})
.then(function(){
    console.log("secind promise is consumed")
})

//passing values in resolve to then
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ganesh",email:"gowda@example.com"})

    },1000)
})
promise3.then(function(user){
    //console.log(user.username)
})


//reject
const promise4=new Promise(function(resolve,reject){
    let error=true
    if(!error){
    setTimeout(function(){
        resolve({username:"ganesh",email:"gowda@example.com"})

    },1000)
}
else{
    reject('Error:something went wrong')
}
})
promise4
.then(function(user){
    console.log(user.username)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("promise is done")
})
// console.log(username)


const promise5=new Promise(function(resolve,reject){
    let error=true
    if(!error){
    setTimeout(function(){
        resolve({username:"ganesh",email:"gowda@example.com"})

    },1000)
}
else{
    reject('Error:JS went wrong')
}

})


/// .then and .catch can be replaced with async await 
// but cannot resolve error gracefully but we can handle it our side gracefully

// async function consumePromise5(){
//     const response=await promise5
//     console.log(response)
// }

async function consumePromise5(){
    try{
        const response=await promise5
        console.log(response)
    }catch(error){
        console.log(error)
    }
    }
consumePromise5()

// async function getallusers(){
//     try{
//         const response=await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data= await response.json()
//         console.log(data)

//     }catch(error){
//         console.log("e:",error)
//     }


// }
// getallusers()      // dosent gives any output not even an error as converting the response too json also requires time
// and hence we get undefined so we need to add await at converting respnse json

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log("E:",error))      //same as above but using default then and catch