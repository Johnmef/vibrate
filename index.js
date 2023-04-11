const heading = document.getElementById('heading');

setTimeout(()=>{
  heading.innerHTML = 'This is heading';
  navigator.vibrate(1000)
},2000)
