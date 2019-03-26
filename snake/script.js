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

let collectionBonus = false;
let timeBonus = 0;
let bonus;
let presenceBonus = false;
let chanceBonus = 1;
function createBonus() {
  if ( Math.floor(Math.random() * 100) < chanceBonus ) {

    function generateBonus() {
      let posX = Math.round(Math.random() * (max - 1) + 1);
      let posY = Math.round(Math.random() * (max - 1) + 1);
      return [posX, posY];
    }

    let bonusCoordinates = generateBonus();
    bonus = document.querySelector('[posX = "' + bonusCoordinates[0] + '"][posY = "' + bonusCoordinates[1] + '"]');

    while (bonus.classList.contains('snakeBody')) {
      let bonusCoordinates = generateBonus();
      bonus = document.querySelector('[posX = "' + bonusCoordinates[0] + '"][posY = "' + bonusCoordinates[1] + '"]');
    }

    bonus.classList.add('bonus');
    presenceBonus = true;
  }

}


let rad = 0;

let checkbox = document.createElement('input');

checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('onchange', 'radio()');

function radio() {
  rad = (checkbox.checked == true) ? 1 : 0;
  localStorage.setItem("radKey", rad);
  location.reload();
}

rad = localStorage.getItem("radKey");
if (rad == 1) {
  checkbox.setAttribute('checked', 'checked');
}

let direction = 'right';
let steps = false;

let inner = document.createElement('div');
document.body.appendChild(inner);
inner.style = `
  width: 660px;
  margin: auto;
  margin-bottom: 120px;
`;

let pScore = document.createElement('p');
inner.appendChild(pScore);
pScore.style.cssText = `
  float: left;
  font-size: 30px;
  font-family: sans-serif;
`;

let pRecord = document.createElement('p');
inner.appendChild(pRecord);
pRecord.style.cssText = `
  float: right;
  font-size: 30px;
  font-family: sans-serif;
`;

let score = 0;

let record = (localStorage.getItem('recordKey')) ? localStorage.getItem('recordKey') : 0;

pScore.innerHTML = `Ваши очки: ${score}`;
pRecord.innerHTML = `Рекорд: ${record}`;

function move() {
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('head');
  snakeBody[snakeBody.length-1].classList.remove('snakeBody');
  snakeBody.pop();

  if (rad == 0) {//без стенки
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
  } else {//со стенкой
    if (direction == 'right') {

      if (snakeCoordinates[0] < max) {
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
      } else {
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
          snakeBody[i].style.backgroundColor = '#a30101';
        }

        if (record < score) {
          record = score;
          setTimeout(() => {
            alert(`Игра окончена. Новый рекорд: ${record}`);
            location.reload();
          }, 200);
          localStorage.setItem('recordKey', record);
        } else {
          setTimeout(() => {
            alert(`Игра окончена. Ваши очки: ${score}. Рекорд: ${record}`);
            location.reload();
          }, 200);
        }
        return;
      }
  
    } else if (direction == 'left') {
  
      if (snakeCoordinates[0] > 1) {
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
      } else {
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
          snakeBody[i].style.backgroundColor = '#a30101';
        }

        if (record < score) {
          record = score;
          setTimeout(() => {
            alert(`Игра окончена. Новый рекорд: ${record}`);
            location.reload();
          }, 200);
          localStorage.setItem('recordKey', record);
        } else {
          setTimeout(() => {
            alert(`Игра окончена. Ваши очки: ${score}. Рекорд: ${record}`);
            location.reload();
          }, 200);
        }
        return;
      }
  
    } else if (direction == 'down') {
  
      if (snakeCoordinates[1] > 1) {
        snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] - 1) + '"]'));
      } else {
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
          snakeBody[i].style.backgroundColor = '#a30101';
        }

        if (record < score) {
          record = score;
          setTimeout(() => {
            alert(`Игра окончена. Новый рекорд: ${record}`);
            location.reload();
          }, 200);
          localStorage.setItem('recordKey', record);
        } else {
          setTimeout(() => {
            alert(`Игра окончена. Ваши очки: ${score}. Рекорд: ${record}`);
            location.reload();
          }, 200);
        }
        return;
      }
  
    } else if (direction == 'up') {
  
      if (snakeCoordinates[1] < max) {
        snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
      } else {
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
          snakeBody[i].style.backgroundColor = '#a30101';
        }

        if (record < score) {
          record = score;
          setTimeout(() => {
            alert(`Игра окончена. Новый рекорд: ${record}`);
            location.reload();
          }, 200);
          localStorage.setItem('recordKey', record);
        } else {
          setTimeout(() => {
            alert(`Игра окончена. Ваши очки: ${score}. Рекорд: ${record}`);
            location.reload();
          }, 200);
        }
        return;
      }
  
    }
  }
  
  
  if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
    mouse.classList.remove('mouse');
    let a = snakeBody[snakeBody.length-1].getAttribute('posX');
    let b = snakeBody[snakeBody.length-1].getAttribute('posY');
    snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
    createMouse();
    score++;
    pScore.innerHTML = `Ваши очки: ${score}`;
    if (score >= 657) {

      clearInterval(interval);
      setTimeout(() => {
        alert('Вы победили! Вы набрали максимальное число очков 657!');
        location.reload();
      }, 200);
    
    } else if (score >= 110 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 50);

    } else if (score >= 75 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 80);

    } else if (score >= 45 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 100);

    } else if (score >= 20 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 120);

    } else if (score >= 10 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 150);

    } else if (score >= 5 && collectionBonus == false) {

      clearInterval(interval);
      interval = setInterval(move, 200);
    }

  }

  if (presenceBonus == false && score >= 110) {
    chanceBonus = 3;
    createBonus();
  } else if (presenceBonus == false && score >= 75) {
    chanceBonus = 2;
    createBonus();
  } else if (presenceBonus == false && score >= 45) {
    createBonus();
  }

  if (presenceBonus == true && snakeBody[0].getAttribute('posX') == bonus.getAttribute('posX') && snakeBody[0].getAttribute('posY') == bonus.getAttribute('posY')) {
    bonus.classList.remove('bonus');
    collectionBonus = true;

    clearInterval(interval);
    interval = setInterval(move, 200);

    if (score >= 110) {
      timeBonus = 55;
    } else if (score >= 75) {
      timeBonus = 35;
    } else if (score >= 45) {
      timeBonus = 20;
    }
  }

  if (timeBonus > 0) {
    timeBonus--;
  } else if (timeBonus == 0 && collectionBonus == true) {

    if (score >= 110) {
      
      clearInterval(interval);
      interval = setInterval(move, 50);

    } else if (score >= 75) {
      
      clearInterval(interval);
      interval = setInterval(move, 80);

    } else if (score >= 45) {
     
      clearInterval(interval);
      interval = setInterval(move, 100);

    }
    
    collectionBonus = false;
    presenceBonus = false;
  }

  if (snakeBody[0].classList.contains('snakeBody')){
    clearInterval(interval);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i].style.backgroundColor = '#a30101';
    }

    if (record < score) {
      record = score;
      setTimeout(() => {
        alert(`Игра окончена. Новый рекорд: ${record}`);
        location.reload();
      }, 200);
      localStorage.setItem('recordKey', record);
    } else {
      setTimeout(() => {
        alert(`Игра окончена. Ваши очки: ${score}. Рекорд: ${record}`);
        location.reload();
      }, 200);
    }
  }

  snakeBody[0].classList.add('head');
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
  }

  steps = true;
}

window.addEventListener('keydown', function (e){
  if (steps == true) {
    if ((e.keyCode == 37 || e.keyCode == 65) && direction != 'right') {
      direction = 'left';
      steps = false;
    } else if ((e.keyCode == 38 || e.keyCode == 87) && direction != 'down') {
      direction = 'up';
      steps = false;
    } else if ((e.keyCode == 39 || e.keyCode == 68) && direction != 'left') {
      direction = 'right';
      steps = false;
    } else if ((e.keyCode == 40 || e.keyCode == 83) && direction != 'up') {
      direction = 'down';
      steps = false;
    }
  }
});

let f = document.body.appendChild(document.createElement('p'));

f.innerHTML = "Стенка: ";
f.appendChild(checkbox);
f.style.cssText = `
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  display: block;
  font-family: sans-serif;
`;