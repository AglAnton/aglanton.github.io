var max = 30,
    S = max * max;

let interval = setInterval(move, 250);

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 0; i < S; i++) {
  let excel = document.createElement('div');
  field.appendChild(excel);
  excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1,
    y = max;

for (let i = 0; i < excel.length; i++) {
  if (x > max) {
    x = 1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}

function generateSnake() {
  let posX = Math.round(Math.random() * (max - (1 + 2)) + 1 + 2);
  let posY = Math.round(Math.random() * (max - 1) + 1);
  return [posX, posY];
}

let coordinates = generateSnake();

let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),
                 document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];
                 
for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('head');

let mouse;

function createMouse() {
  function generateMouse() {
    let posX = Math.round(Math.random() * (max - 1) + 1);
    let posY = Math.round(Math.random() * (max - 1) + 1);
    return [posX, posY];
  }

  let mouseCoordinates = generateMouse();
  mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

  while (mouse.classList.contains('snakeBody')) {
    let mouseCoordinates = generateMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
  }

  mouse.classList.add('mouse');
}

createMouse();

let direction = 'right';
let steps = false;
let p = document.createElement('p');
document.body.appendChild(p);
p.style.cssText = `
  text-align: center;
  margin-top: 40px;
  font-size: 30px;
  display: block;
  font-family: sans-serif;
`;
let score = 0;

p.innerHTML = `Ваши очки: ${score}`;

function move() {
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('head');
  snakeBody[snakeBody.length-1].classList.remove('snakeBody');
  snakeBody.pop();

  if (direction == 'right') {

    if (snakeCoordinates[0] < max) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
    }

  } else if (direction == 'left') {

    if (snakeCoordinates[0] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "' + max +'"][posY = "' + snakeCoordinates[1] + '"]'));
    }

  } else if (direction == 'down') {

    if (snakeCoordinates[1] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] - 1) + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + max +'"]'));
    }

  } else if (direction == 'up') {

    if (snakeCoordinates[1] < max) {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
    }

  }
  
  if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
    mouse.classList.remove('mouse');
    let a = snakeBody[snakeBody.length-1].getAttribute('posX');
    let b = snakeBody[snakeBody.length-1].getAttribute('posY');
    snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
    createMouse();
    score++;
    p.innerHTML = `Ваши очки: ${score}`;
    if (score == 5) {

      clearInterval(interval);
      interval = setInterval(move, 200);

    } else if(score == 10) {

      clearInterval(interval);
      interval = setInterval(move, 150);

    } else if(score == 20) {

      clearInterval(interval);
      interval = setInterval(move, 120);

    } else if(score == 45) {

      clearInterval(interval);
      interval = setInterval(move, 100);

    } else if(score == 75) {

      clearInterval(interval);
      interval = setInterval(move, 80);

    } else if (score == 110) {

      clearInterval(interval);
      interval = setInterval(move, 50);

    } else if (score > 656) {

      clearInterval(interval);
      setTimeout(() => {
        alert('Вы победили! Вы набрали максимальное число очков 657!');
        location.reload();
      }, 200);
    
    }
  }
  
  if (snakeBody[0].classList.contains('snakeBody')){
    clearInterval(interval);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i].style.backgroundColor = '#a30101';
    }

    setTimeout(() => {
      alert(`Игра окончена. Ваши очки: ${score}.`);
      location.reload();
    }, 200);
  }

  snakeBody[0].classList.add('head');
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
  }

  steps = true;
}

window.addEventListener('keydown', function (e){
  if (steps == true) {
    if (e.keyCode == 37 && direction != 'right') {
      direction = 'left';
      steps = false;
    } else if (e.keyCode == 38 && direction != 'down') {
      direction = 'up';
      steps = false;
    } else if (e.keyCode == 39 && direction != 'left') {
      direction = 'right';
      steps = false;
    } else if (e.keyCode == 40 && direction != 'up') {
      direction = 'down';
      steps = false;
    }
  }
});