const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  createBoxes.innerHTML = '';
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    elements.push(div);
    size += 10;
  }
  boxes.append(...elements);
}
  function destroyBoxes() {
    boxes.innerHTML = '';
  }
  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100');
      return;
    }
    createBoxes(amount);
    input.value = '';
  });
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

