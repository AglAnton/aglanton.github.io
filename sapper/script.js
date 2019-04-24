let WIDTH, HEIGHT, BOMB_VALUE;

function newGame(n) {

  if (localStorage.getItem('width') !== null) {
    WIDTH = localStorage.getItem('width');
    HEIGHT = localStorage.getItem('height');
    BOMB_VALUE = localStorage.getItem('bombValue');

    document.getElementById('width').setAttribute('value', WIDTH);
    document.getElementById('height').setAttribute('value', HEIGHT);
    document.getElementById('bombValue').setAttribute('value', BOMB_VALUE);
  } else {
    WIDTH  = document.getElementById('width').value;
    HEIGHT = document.getElementById('height').value;
    BOMB_VALUE = document.getElementById('bombValue').value;
  }

  if (n > 0) {
    let
    width  = document.getElementById('width').value,
    height = document.getElementById('height').value,
    bombValue = document.getElementById('bombValue').value;

    if (width > 30) {
      width = 30;
    } else if (width < 2) { 
      width = 2;
    } 
    localStorage.setItem('width', width);

    if (height > 20) {
      height = 20;
    } else if (height < 2) { 
      height = 2;
    }
    localStorage.setItem('height', height);

    if (bombValue > width * height - 1) {
      bombValue = width * height - 1;
    } else if (bombValue < 1) { 
      bombValue = 1;
    }
    localStorage.setItem('bombValue', bombValue);

    window.location.replace(location);
  }
}
newGame(0);    

let smile     = document.getElementById('smile'),
    bomb      = document.getElementById('bomb'),
    bombValue = 0,
    time      = document.getElementById('time'),
    timeValue = 0,
    field     = document.getElementById('field');

field.style.width = WIDTH * 32 + 'px';
field.style.height = HEIGHT * 32 + 'px';

if (BOMB_VALUE < 10) {
  bomb.innerHTML = '00' + BOMB_VALUE;
} else if (BOMB_VALUE < 100) {
  bomb.innerHTML = '0' + BOMB_VALUE;
} else {
  bomb.innerHTML = BOMB_VALUE;
}

let timer;
function startTime() {
  timer = setInterval(function() {
    timeValue++;
    if (timeValue < 10) {
      time.innerHTML = '00' + timeValue;
    } else if (timeValue < 100) {
      time.innerHTML = '0' + timeValue;
    } else if (timeValue < 1000){
      time.innerHTML = timeValue;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
startTime();

function smileDown() {
  smile.style.background = 'url(img/smileClick.jpg) no-repeat center';
}
function smileUp(n) {
  if (n > 0) window.location.replace(location);

  if (cellStyle[1][1] == 'bomb') {
    smile.style.background = 'url(img/smileX.jpg) no-repeat center';
  } else if (course == win) {
    smile.style.background = 'url(img/smileWin.jpg) no-repeat center';
  } else {
    smile.style.background = 'url(img/smile.jpg) no-repeat center';
  }
}

let cellStyle = [];
for (let y = 1; y <= WIDTH; y++){
    cellStyle[y] = [];
    for (let x = 1; x <= HEIGHT; x++){
        cellStyle[y][x] = 'cell';
    }
}

let x = 1, y = HEIGHT;
for (let i = 0; i < WIDTH * HEIGHT; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.style.background = 'url(img/cell.jpg) no-repeat center';

  cell.setAttribute('onmousedown', 'cellDown(' + x + ',' + y + ')');
  cell.setAttribute('onclick', 'cellUp(' + x + ',' + y + ',' + 1 +')');
  cell.setAttribute('onmouseout', 'cellUp(' + x + ',' + y + ',' + 0 +')');
  cell.setAttribute('oncontextmenu', 'cellFlag(' + x + ',' + y +')');
  cell.setAttribute('posX', x);
  cell.setAttribute('posY', y);
  x++;
  if (x > WIDTH) {
    x = 1;
    y--;
  }

  field.appendChild(cell);
}

let coordinates =[];
for (let y = 1; y <= WIDTH; y++){
    coordinates[y] = [];
  for (let x = 1; x <= HEIGHT; x++){
    coordinates[y][x] = 0;
  }
}

let win, course = 0;
function bombGeneration() {
  while (bombValue < BOMB_VALUE) {
    x = Math.floor(Math.random() * (WIDTH)) + 1;
    y = Math.floor(Math.random() * (HEIGHT)) + 1;
    if (coordinates[x][y] != -1) {
      coordinates[x][y] = -1;
      bombValue++;
    }
    win = WIDTH * HEIGHT - bombValue;
  }

  x = 1, y = HEIGHT;
  for (let i = 0; i < WIDTH * HEIGHT; i++) {
    
    if (coordinates[x][y] != -1) {
      
      let num = 0;

      if (x == 1 && y == 1) {

        for (let k = 0; k <= 1; k++) {
          for (let j = 0; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }

      } else if (x == 1 && y == HEIGHT) {

        for (let k = 0; k <= 1; k++) {
          for (let j = -1; j <= 0; j++) {
            if (coordinates[x+k][Number(y)+j] == -1) num++;
          }
        }

      } else if (x == 1) {

        for (let k = 0; k <= 1; k++) {
          for (let j = -1; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }

      } else if (x == WIDTH && y == 1) {

        for (let k = -1; k <= 0; k++) {
          for (let j = 0; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }
        
      } else if (x == WIDTH && y == HEIGHT) {

        for (let k = -1; k <= 0; k++) {
          for (let j = -1; j <= 0; j++) {
            if (coordinates[x+k][Number(y)+j] == -1) num++;
          }
        }
        
      } else if (x == WIDTH) {

        for (let k = -1; k <= 0; k++) {
          for (let j = -1; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }

      } else if (y == 1) {

        for (let k = -1; k <= 1; k++) {
          for (let j = 0; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }

      } else if (y == HEIGHT) {

        for (let k = -1; k <= 1; k++) {
          for (let j = -1; j <= 0; j++) {
            if (coordinates[x+k][Number(y)+j] == -1) num++;
          }          
        }

      } else {

        for (let k = -1; k <= 1; k++) {
          for (let j = -1; j <= 1; j++) {
            if (coordinates[x+k][y+j] == -1) num++;
          }
        }

      }

      coordinates[x][y] = num;
      
    }
    x++;
    if (x > WIDTH) {
      x = 1;
      y--;
    }

  }
}
bombGeneration();


function cellDown(x, y) {
  if (cellStyle[1][1] != 'bomb') {
    if (cellStyle[x][y] == 'cell' || cellStyle[x][y] == 'bombMini') {
      let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`)
      smile.style.background = 'url(img/smileO.jpg) no-repeat center';
      cell.style.background = 'url(img/cellZero.jpg) no-repeat center';
    }
  }
}

function cellUp(x, y, n) {
  if (cellStyle[1][1] != 'bomb' &&  course < win) {
    let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);

    if (n > 0 && (cellStyle[x][y] == 'cell' || cellStyle[x][y] == 'bombMini')) {

      switch (coordinates[x][y]) {
        case -1: {
          cell.style.background = 'url(img/bombClick.png) no-repeat center';
          coordinates[x][y] = -2;
          clearInterval(timer);

          let corX = 1, corY = HEIGHT;
          for (let i = 0; i < WIDTH * HEIGHT; i++){
            cell = document.querySelector(`[posX = "${corX}" ][ posY = "${corY}" ]`);
            if (coordinates[corX][corY] == -1) {
              cell.style.background = 'url(img/bomb.jpg) no-repeat center';
            }
            if (cellStyle[corX][corY] == 'flag') {
              if (coordinates[corX][corY] != -1) {
                cell.style.background = 'url(img/bombX.png) no-repeat center';
              } else {
                cell.style.background = 'url(img/flag.png) no-repeat center';
              }
            }
            cellStyle[corX][corY] = 'bomb';

            corX++;
            if (corX > WIDTH) {
              corX = 1;
              corY--;
            }
          }
          // bombMini = false;
          break;
        }
        case 0: {

          cellZero(x, y);

          break;
        }
        case 1: {
          cell.style.background = 'url(img/cell1.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 2: {
          cell.style.background = 'url(img/cell2.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 3: {
          cell.style.background = 'url(img/cell3.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 4: {
          cell.style.background = 'url(img/cell4.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 5: {
          cell.style.background = 'url(img/cell5.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 6: {
          cell.style.background = 'url(img/cell6.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 7: {
          cell.style.background = 'url(img/cell7.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 8: {
          cell.style.background = 'url(img/cell8.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
      }
      course++;

    } else if (cellStyle[x][y] == 'cell'){
    
      cell.style.background = 'url(img/cell.jpg) no-repeat center';
  
    } else if (cellStyle[x][y] == 'bombMini') {
      
      cell.style.background = 'url(img/bombMini.jpg) no-repeat center';

    }

    if (cellStyle[x][y] == 'bomb') {
      smile.style.background = 'url(img/smileX.jpg) no-repeat center';
    } else {
      smile.style.background = 'url(img/smile.jpg) no-repeat center';
    }

    if (cellStyle[x][y] != 'bomb' && course == win) {
      smile.style.background = 'url(img/smileWin.jpg) no-repeat center';
      x = 1, y = HEIGHT;
      for (let i = 0; i < WIDTH * HEIGHT; i++) {
        let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);
        if (coordinates[x][y] == -1) {
          cell.style.background = 'url(img/flag.png) no-repeat center';
          cellStyle[x][y] = 'flag';
        }
        x++;
        if (x > WIDTH) {
          x = 1;
          y--;
        }
      }
      clearInterval(timer);
      record();
    }
  } 
}

function cellFlag(x, y){
  if (cellStyle[1][1] != 'bomb' && course < win) {
    let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);

    if ((cellStyle[x][y] == 'cell' || cellStyle[x][y] == 'bombMini') && bombValue > 0) {

      cell.style.background = 'url(img/flag.png) no-repeat center';
      cellStyle[x][y] = 'flag';
      
      bombValue--;
      if (bombValue < 10){
        bomb.innerHTML = '00' + bombValue;
      } else if (bombValue < 100) {
         bomb.innerHTML = '0' + bombValue;
      } else {
        bomb.innerHTML = bombValue;
      }

    } else if (cellStyle[x][y] == 'flag') {

      if (coordinates[x][y] == -1 && bombMini == true) {

        cell.style.background = 'url(img/bombMini.jpg) no-repeat center';
        cellStyle[x][y] = 'bombMini';

      } else {

        cell.style.background = 'url(img/cell.jpg) no-repeat center';
        cellStyle[x][y] = 'cell';

      } 

      bombValue++;
      if (bombValue < 10){
        bomb.innerHTML = '00' + bombValue;
      } else if (bombValue < 100) {
         bomb.innerHTML = '0' + bombValue;
      } else {
        bomb.innerHTML = bombValue;
      }
      
    } else if (cellStyle[x][y] == 'cell') {
      cell.style.background = 'url(img/cell.jpg) no-repeat center';
    }
    smile.style.background = 'url(img/smile.jpg) no-repeat center';
  }
}


function cellZero(x, y) {
  let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);
  cell.style.background = 'url(img/cellZero.jpg) no-repeat center';
  cellStyle[x][y] = 'one';
  if (x == 1 && y == 1) {

    for (let k = 0; k <= 1; k++) {
      for (let j = 0; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else if (x == 1 && y == HEIGHT) {

    for (let k = 0; k <= 1; k++) {
      for (let j = -1; j <= 0; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else if (x == 1) {

    for (let k = 0; k <= 1; k++) {
      for (let j = -1; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else if (x == WIDTH && y == 1) {

    for (let k = -1; k <= 0; k++) {
      for (let j = 0; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }
    
  } else if (x == WIDTH && y == HEIGHT) {

    for (let k = -1; k <= 0; k++) {
      for (let j = -1; j <= 0; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }
    
  } else if (x == WIDTH) {

    for (let k = -1; k <= 0; k++) {
      for (let j = -1; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else if (y == 1) {

    for (let k = -1; k <= 1; k++) {
      for (let j = 0; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else if (y == HEIGHT) {

    for (let k = -1; k <= 1; k++) {
      for (let j = -1; j <= 0; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  } else {

    for (let k = -1; k <= 1; k++) {
      for (let j = -1; j <= 1; j++) {
        cellZeroFormula(x, y, k, j);
      }
    }

  }
}

function cellZeroFormula(x, y, k, j) {
  if (cellStyle[x+k][y+j] == 'cell') {
    let cell = document.querySelector(`[posX = "${x+k}" ][ posY = "${y+j}" ]`);

    switch (coordinates[x+k][y+j]) {
      case 0: {
        cellZero(x+k, y+j);
        course++;
        break;
      } 
      case 1: {
        cell.style.background = 'url(img/cell1.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 2: {
        cell.style.background = 'url(img/cell2.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 3: {
        cell.style.background = 'url(img/cell3.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 4: {
        cell.style.background = 'url(img/cell4.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 5: {
        cell.style.background = 'url(img/cell5.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 6: {
        cell.style.background = 'url(img/cell6.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 7: {
        cell.style.background = 'url(img/cell7.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
      case 8: {
        cell.style.background = 'url(img/cell8.png) no-repeat center';
        cellStyle[x+k][y+j] = 'one';
        course++;
        break;
      }
             
    }
  }
}


let rec = document.getElementById('record');
if (localStorage.getItem('rec') !== null) {
  rec.innerHTML = 'Ваш рекорд: ' + localStorage.getItem('rec') + 'с.';
}

function record() {
  if (localStorage.getItem('rec') === null) {
    localStorage.setItem('rec', 999);
  }

  if (timeValue < localStorage.getItem('rec')) localStorage.setItem('rec', timeValue);

  rec.innerHTML = 'Ваш рекорд: ' + localStorage.getItem('rec') + 'с.';
}

window.addEventListener('keydown', function (e){
  if (e.keyCode == 13) {
    newGame(1);
  }
});

//cheats
let bombMini = false;
function bombView() {
  x = 1, y = HEIGHT;
  for (let i = 0; i < WIDTH * HEIGHT; i++){
    if (coordinates[x][y] == -1 && cellStyle[x][y] != 'flag') {
      let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);
      cell.style.background = 'url(img/bombMini.jpg) no-repeat center';
      cellStyle[x][y] = 'bombMini';
    } else if (coordinates[x][y] != -1 && cellStyle[x][y] == 'flag') {
      let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);
      cell.style.background = 'url(img/cell.jpg) no-repeat center';
      cellStyle[x][y] = 'cell';
    }
    x++;
    if (x > WIDTH) {
      x = 1;
      y--;
    }
  }
  bombMini = true;
}

function funWin() {
  if (cellStyle[1][1] != 'bomb') {
    
    x = 1, y = HEIGHT;
    for (let i = 0; i < WIDTH * HEIGHT; i++) {
      let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`);
      switch (coordinates[x][y]) {
        case -1: {
          cell.style.background = 'url(img/flag.png) no-repeat center';
          cellStyle[x][y] = 'flag';
          break;
        }
        case 0: {
          cell.style.background = 'url(img/cellZero.jpg) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        } 
        case 1: {
          cell.style.background = 'url(img/cell1.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 2: {
          cell.style.background = 'url(img/cell2.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 3: {
          cell.style.background = 'url(img/cell3.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 4: {
          cell.style.background = 'url(img/cell4.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 5: {
          cell.style.background = 'url(img/cell5.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 6: {
          cell.style.background = 'url(img/cell6.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 7: {
          cell.style.background = 'url(img/cell7.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }
        case 8: {
          cell.style.background = 'url(img/cell8.png) no-repeat center';
          cellStyle[x][y] = 'one';
          break;
        }        
      }
      x++;
      if (x > WIDTH) {
        x = 1;
        y--;
      }
    }
    smile.style.background = 'url(img/smileWin.jpg) no-repeat center';
    course = win;
    clearInterval(timer);
    bomb.innerHTML = '000';
    record();
  }
}

function timeStop() {
  clearInterval(timer);
}

function next() {
  if (cellStyle[1][1] == 'bomb') {
    smile.style.background = 'url(img/smile.jpg) no-repeat center';

    x = 1, y = HEIGHT;
    for (let i = 0; i < WIDTH * HEIGHT; i++) {
      let cell = document.querySelector(`[posX = "${x}" ][ posY = "${y}" ]`),
          cellAtt = cell.getAttribute('style');
      
      switch (coordinates[x][y]) {
        case -2: {
          coordinates[x][y] = -1;
          cell.style.background = 'url(img/cell.jpg) no-repeat center';
          cellStyle[x][y] = 'cell';
        }
        case -1: {
          
          if (cellAtt == 'background: url("img/flag.png") center center no-repeat;') {
            cellStyle[x][y] = 'flag';
            
          } else {
            cell.style.background = 'url(img/cell.jpg) no-repeat center';
            cellStyle[x][y] = 'cell';
          }
          break;
        }
        default: {
          if (cellAtt == 'background: url("img/cell.jpg") center center no-repeat;') {
            cellStyle[x][y] = 'cell';
          } else if (cellAtt == 'background: url("img/flag.png") center center no-repeat;') {
            cellStyle[x][y] = 'flag';
          } else if (cellAtt == 'background: url("img/bombX.png") center center no-repeat;') {
            cell.style.background = 'url(img/flag.png) no-repeat center';
            cellStyle[x][y] = 'flag';
          } else {
            cellStyle[x][y] = 'one'
          }
          break;
        }
      }
      x++;
      if (x > WIDTH) {
        x = 1;
        y--;
      }
    }
    startTime();
    course--;
    if (bombMini == true) bombView();
  }
}