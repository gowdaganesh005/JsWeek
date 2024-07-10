let date=new Date()
/// in js the reference date is with 1 jan 1970 and calculations are carried out of milliseconds so we can comapare two dates in millisecond

console.log(date)

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(date.toJSON())
console.log(date.toTimeString())
console.log(date/1000) //to convert to seconds of given date
console.log(Math.floor(date/1000))  //to avoid the decimals 

//let d1=new Date(2024 ,0,5)
//let d1=new Date(2024 ,0,5,7,20,45)  ///months are in the 0 based format

//let d1=new Date("2024-01-15")//yyyy/mm/dd
let d1=new Date("10-05-2024")  ///mm/dd/yyyy
console.log(d1)


let d2= new Date()         /// this value is determined from jan 1970 and is in the millisecond

console.log(d2.getHours())


console.log(d2.toLocaleString('default',{              /// this can be modified using the paramertes to the function
    hour12:'true',weekday:'long'
}))


