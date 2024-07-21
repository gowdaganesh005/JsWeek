SetInterval and ClearInterval functions of the time in Js.

project 1:change background color every second and clear it using stop button.
```javascript
function generateRandomColor() {
  const hex = '0123456789ABCDEF';
  let randomcolor = '#';
  for (i = 0; i < 6; i++) {
    randomcolor+=hex[Math.round(Math.random()*16)]
    
  }
  return randomcolor
}
// console.log(Math.round(Math.random()*16));
let interval;
document.querySelector('#start').addEventListener('click',function(e){
  if(!interval){
  interval=setInterval(changeBgColor,1000)
  function changeBgColor(){
     document.body.style.backgroundColor=generateRandomColor()
  }
}
  

})
document.querySelector('#stop').addEventListener('click',function(e){
  clearInterval(interval)
  interval=null
  })
```
