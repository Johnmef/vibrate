const heading = document.getElementById('heading');

setTimeout(()=>{
  
  if (window.navigator.vibrate(300)){
    window.navigator.vibrate(300)
    heading.innerHTML = 'This is heading';    
  }

},2000)
