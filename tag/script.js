let field = document.createElement('div');
  document.body.appendChild(field);
  field.classList.add('field');


for (let i = 0; i < 16; i++) {
  if (i < 15) {
    let cell = document.createElement('div');
      field.appendChild(cell);
      cell.classList.add('cell');
      cell.innerHTML = i + 1;
      cell.setAttribute('value', i+1);
  } else {
    let cell = document.createElement('div');
      field.appendChild(cell);
      cell.classList.add('cellNone');
      cell.setAttribute('value', 0);
      cell.setAttribute('posX', 4);
      cell.setAttribute('posY', 1);
  }
}

let cell = document.getElementsByClassName('cell');

let x = 1,
    y = 4;
for (let i = 0; i < cell.length; i++) {
  if (x > 4) {
    y--;
    x = 1;
  }
  cell[i].setAttribute('posX', x);
  cell[i].setAttribute('posY', y);
  cell[i].setAttribute('onclick', 'move(' + x + ', '+ y + ')')

  x++;
}

let win = false;

function move(x, y) {
  let cellNone = document.body.querySelector('.cellNone');
  let cellNoneX = cellNone.getAttribute('posX');
  let cellNoneY = cellNone.getAttribute('posY');

  if ((x+1 == cellNoneX || x-1 == cellNoneX) && y == cellNoneY ||
      (y+1 == cellNoneY || y-1 == cellNoneY) && x == cellNoneX) {

    let cellSwap = document.querySelector('[posX="' + x + '"][posY="' + y + '"]');
    let value = cellSwap.getAttribute('value');

    cellNone.setAttribute('value', value);
    cellNone.classList.remove('cellNone');
    cellNone.classList.add('cell');
    cellNone.innerHTML = value;
    cellNone.setAttribute('onclick', 'move(' + cellNoneX + ',' + cellNoneY + ')')

    cellSwap.innerHTML = '';
    cellSwap.classList.remove('cell');
    cellSwap.classList.add('cellNone');
    cellSwap.setAttribute('value', 0);
    cellSwap.removeAttribute('onclick')

  }

  cellNone = document.body.querySelector('.cellNone'); 
  cellNoneX = cellNone.getAttribute('posX');
  cellNoneY = cellNone.getAttribute('posY');
  
  if (win == true) {
    if (cellNoneX == 4 && cellNoneY == 1) {
      for (let i = 0; i < 15; i++) {
        let value = cell[i].getAttribute('value');
        if (value != i+1) {
          break;
        }
        if (value == 15) {
          setTimeout(() => {
            alert("Вы победили!")
          }, 50);
          win = false;
        }
      } 
    }
  }
}

let buttonStir = document.createElement('button');
document.body.appendChild(buttonStir);
buttonStir.classList.add('stir');
buttonStir.setAttribute('onclick', 'stir()');
buttonStir.innerHTML = "Размешать";

function stir() {
  let pastRand = 0,
      rand;

  for (let i = 0; i < 200; i++) {
    let cellNone = document.body.querySelector('.cellNone'),
        cellNoneX = cellNone.getAttribute('posX'),
        cellNoneY = cellNone.getAttribute('posY');

    do {
      rand = Math.floor(Math.random() * (5 - 1) + 1);
    } while (rand == pastRand || (cellNoneX == 1 && rand == 1) || (cellNoneX == 4 && rand == 3)
            || (cellNoneY == 1 && rand == 4) || (cellNoneY == 4 && rand == 2));
    
    pastRand = (rand > 2) ? rand - 2 : rand + 2;
    
    switch (rand) {
      case 1: {//left
        cellNoneX = Number(cellNoneX) - 1;
        break;
      }
      case 2: {//up
        cellNoneY = Number(cellNoneY) + 1;
        break;
      }
      case 3: {//right
        cellNoneX = Number(cellNoneX) + 1;
        break;
      }
      case 4: {//down
        cellNoneY = Number(cellNoneY) - 1;
        break;
      }
    }
    move(cellNoneX, cellNoneY);
  }
  
  win = true;
}

window.addEventListener('keydown', function (e){
  let cellNone = document.body.querySelector('.cellNone'),
      cellNoneX = cellNone.getAttribute('posX'),
      cellNoneY = cellNone.getAttribute('posY');
      
  if ((e.keyCode == 37 || e.keyCode == 65) && cellNoneX > 1) {//left
    cellNoneX = Number(cellNoneX) - 1;
  } else if ((e.keyCode == 38 || e.keyCode == 87) && cellNoneY < 4) {//up
    cellNoneY = Number(cellNoneY) + 1;
  } else if ((e.keyCode == 39 || e.keyCode == 68) && cellNoneX < 4) {//right
    cellNoneX = Number(cellNoneX) + 1;
  } else if ((e.keyCode == 40 || e.keyCode == 83) && cellNoneY > 1) {//down
    cellNoneY = Number(cellNoneY) - 1;
  } else if (e.keyCode == 13) {
    stir();
  }
  move(cellNoneX, cellNoneY);
});