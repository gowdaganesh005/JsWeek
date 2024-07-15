//IIFE immediately invoked function expressions

(function add(){                //named iife
    console.log("welcome to the website \nDatabse one connected")
})();             // iife doesnt know where to stop the scope of the function so it doesnt not stop and we need to add ;

// if ; is not added throws an error welcome to the website 
// Databse one connected
// /workspaces/JsWeek/Functions/iife.js:8
// (()=> {
// ^

// TypeError: (intermediate value)(...) is not a function


// so towo write 2 iife funcion we  need to add ;


//iife can be any function here its arrow
(()=> {
    console.log("database two connected")
})()