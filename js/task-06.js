console.log("task-06");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
  
      size += 10;
    }
  }
  
  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }
  
  document.querySelector('[data-create]').addEventListener('click', function () {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);
  
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });
  
  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);