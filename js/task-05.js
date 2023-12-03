console.log("task-05");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  function changeColor() {
    const body = document.body;
    const colorSpan = document.querySelector('.color');
  
    const randomColor = getRandomHexColor();
     
    body.style.backgroundColor = randomColor;
  
        colorSpan.textContent = randomColor;
  }
  