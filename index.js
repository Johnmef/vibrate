const heading = document.getElementById('heading');

setTimeout(()=>{
  heading.innerHTML = 'This is heading';
  window.navigator.vibrate(300)

},2000)
