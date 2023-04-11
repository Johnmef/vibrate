const heading = document.getElementById('heading');

setTimeout(()=>{
  heading.innerHTML = 'This is the heading';
  window.navigator.vibrate(300)

},2000)
