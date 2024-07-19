Project Code for DOM Projects.


project 1 
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target)
    // if(e.target.id=='grey') body.style.backgroundColor=e.target.id
    // if(e.target.id=='white') body.style.backgroundColor=e.target.id
    // if(e.target.id=='blue') body.style.backgroundColor=e.target.id
    // if(e.target.id=='yellow') body.style.backgroundColor=e.target.id

    body.style.backgroundColor = e.target.id;
  });
});

```

project 2
```javascript
const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(e)
  // console.log(e.target)
  const height = parseInt(form.querySelector('#height').value);
  // console.log(height)
  const weight = parseInt(form.querySelector('#weight').value);
  // console.log(weight)
  const results = document.querySelector('#results');
  console.log(results);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    let msg = '';
    if (bmi < 18.6) msg = 'Under Weight';
    else if (bmi > 24.9) msg = 'Over weight';
    else msg = 'normal weight';
    results.innerHTML = `<span>BMI : ${bmi} ${msg}</span>`;
  }
});
```
project 3

```javascript
const clock = document.getElementById('clock');

// console.log(date.toLocaleTimeString)

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

