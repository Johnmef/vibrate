const heading = document.getElementById('heading');

setTimeout(()=>{
  heading.innerHTML = 'This is the heading';
  navigator.vibrate(1000)
},2000)
