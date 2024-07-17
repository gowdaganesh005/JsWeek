// filters can act like for each and actually return value see Siterator.js 

//filter cna also be used to return conditons to filter data

let books=[
    {name:"book one", year:2000,genre:"horror"},
    {name:"book two", year:1998,genre:"comedy"},
    {name:"book Three", year:2009,genre:"horror"},
    {name:"book four", year:1965,genre:"horror"},
    {name:"book five", year:1977,genre:"comedy"},
]

let hbooks=books.filter((bk)=> bk.year>=2000)

let cbooks=books.filter((bk)=> bk.year>=1998 && bk.genre==="comedy")


console.log(cbooks)

//+++++++++++++++++++++++++++  +  map   +  +++++++++++++++++++++++

const arr1=[1,2,3,4,5,6]

let val1=arr1.map((num)=> num+1)
val1=arr1.map((num)=> num>2)   // here [ false, false, true, true, true, true ] is op that is it applies the given function to indivual element
val1=arr1.filter((num)=> num>2)  //[ 3, 4, 5, 6 ]

val1=arr1.filter((num)=>num+1)  // [ 1, 2, 3, 4, 5, 6 ] here since no comparisoon is made the entire array is returned assuming truly value
//while filter on othe r hand return the element if the it satifies the conditon


console.log(val1)

// these functions can be chained one over the other

val1=arr1.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(val1)



// ++++++++++++++++++++++++++++++++++    reduce  +++++++++++++++++++++++++++++++++++++++


// specific application to calculate the sum of the list of objects so syntax is

const arr2=[1,2,3,4,5,6,7,8,9,10]
let  n=arr2.reduce(function (acc,curval){
    return acc+curval
},0)   // inital value of the accumulator 

n=arr2.reduce((acc,nums)=>acc+nums,0)   //using arrow function



console.log(n)

// specific application

const shoppingcart=[
    {
        name:"js Source",
        price:2999
    },
    {
        name:"data science",
        price:12999
    },
    {
        name:"web decvelopment",
        price:5999
    },

]

const paying_price=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(paying_price)
