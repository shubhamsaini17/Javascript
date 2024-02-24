const form = document.querySelector('form');

let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let result = document.querySelector('#results');

const category = document.createElement('div');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  height = parseInt(document.querySelector('#height').value);
  weight = parseInt(document.querySelector('#weight').value);
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height == ' ' || height < 0 || isNaN(height)) {
    result.innerText = `please give a valid height${height}`;
  } else if (weight == ' ' || weight < 0 || isNaN(weight)) {
    result.innerText = `please give a valid weight${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    form.appendChild(category);
  }

  if (bmi <= 18.6) {
    category.innerHTML = 'you are Under Weight';
  } else if (bmi > 18.6 && bmi <= 24.9) {
    category.innerHTML = 'you are Normal Weight';
  } else {
    category.innerHTML = 'you are OverWeight';
  }
  result.append(category);
});
