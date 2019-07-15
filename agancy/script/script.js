// products-nav
let nav = document.querySelector('.products-nav');
let items = nav.children;
let name = 'all';

for (let i = 0; i < items.length; i++) {
  items[i].onclick = () => selectNav(i);
}

function selectNav(i) {
  let select = nav.querySelector('.select');

  select.classList.remove('select');
  items[i].classList.add('select');

  switch (i) {
    case 0: {
      name = 'all';
      break;
    }
    case 1: {
      name = 'print_template';
      break;
    }
    case 2: {
      name = 'web_template';
      break;
    }
    case 3: {
      name = 'user_interface';
      break;
    }
    case 4: {
      name = 'mock-up';
      break;
    }
  }
  replace(i);
}

function replace(num) {
  let images = document.querySelector('.products-image').querySelectorAll('.img');

  for (let i = 0; i < images.length; i++) {
    images[i].dataset.imgSrc = `img/products/${name}/${i+1}.jpg`;
    images[i].dataset.imgAlt = `img${num+1}`;
    let img = images[i];
    insertImg(img);
  }
}

// images
let images = document.querySelectorAll('.img');

let img = images[0];

let video = images[0].querySelector('video');
video.style.height = '100%';

for (let i = 1; i < images.length; i++) {
  let img = images[i];
  insertImg(img);
}

function insertImg(img) {

  let src = img.dataset.imgSrc;
  let alt = img.dataset.imgAlt;
  let bgColor = getComputedStyle(img).backgroundColor;

  img.style.background = `url(${src}) no-repeat center / cover`;
  img.style.backgroundColor = bgColor;
  img.style.height = img.dataset.height ? img.dataset.height : `${img.clientWidth}px`;

  let imgPath = new Image();
  imgPath.src = src;
  imgPath.onerror = () => {
    img.innerHTML = alt;
  }
}

//adaptive
if (document.documentElement.clientWidth < 992) {
  let img = document.querySelector('.teem-block-img_height');
  img.style.height = img.offsetWidth / 3 * 4  + 'px';
}
if (document.documentElement.clientWidth < 768) {
  
  slider(document.querySelector('.products-image'),
         'products-slider',
         true);

  slider(document.querySelector('.teem-block'),
         'teem-slider',
         false, 1);

  slider(document.querySelector('.provide-block-list'),
         'provide-slider',
         true);  

  let hr = document.querySelectorAll('[align="left"]');
  for (let i = 0; i < hr.length; i++) {
    hr[i].removeAttribute('align');
  }

  //menu
  let btn = document.querySelector('.btn-menu');
  btn.onclick = () => {
    let menu = document.querySelector('.header');
    menu.style.transition = '0.3s';
    menu.classList.toggle('menu_open');

    btn.classList.toggle('btn-menu_open');
  };

}

function slider(block, classSlider, flag = false, numRow = 0, numRowTwo = 1) {
  let row = block.children[numRow], length;
  
  if (flag) {
    let rowTwo = block.children[numRowTwo];

    length = rowTwo.children.length;

    for (let i = 0; i < length; i++) {
      row.appendChild(rowTwo.children[0]);
    }
    rowTwo.remove();
  }

  let col12 = document.createElement('div');
  col12.classList.add('col-12');

  let slider = document.createElement('div');
  slider.classList.add(classSlider);

  col12.appendChild(slider);

  let images = row.children;
  length = images.length;

  row.appendChild(col12);

  for (let i = 0; i < length; i++) {
    images[0].className = '';

    slider.appendChild(images[0]);
  }
}