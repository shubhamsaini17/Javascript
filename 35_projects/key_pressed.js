

const keyPrint = document.getElementById('insert');

window.addEventListener('keydown',function(e){
  keyPrint.innerHTML = `<h1> key pressed:- ${e.key}</h1> </br> <h2>keycode:- ${e.code}</h2>`
  
})