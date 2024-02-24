const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

// random color genrate

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
const colorChange = function () {
  document.querySelector('body').style.backgroundColor = `${randomColor()}`;
};

let toStop;
start.addEventListener('click', function () {
  if(!toStop){
  toStop = setInterval(colorChange, 1000);
  }
});

stop.addEventListener('click', function () {
  clearInterval(toStop);
  toStop = null;
});
