// products-nav
/* let items = document.querySelectorAll('.products-nav_item');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => selectNav(i));
}

let name;

function selectNav(i) {
  let item = document.querySelector('.products-nav').querySelector('.select');
  
  item.classList.remove('select');
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
  let images = document.querySelector('.products-image').querySelectorAll('img');

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', `img/products/${name}/${i+1}.jpg`);
    images[i].setAttribute('alt', `img${num+1}`);
  }
} */

// images
let images = document.querySelectorAll('.img');

let img = images[0];

let video = images[0].querySelector('video');
video.style.height = '100%';
// img.style.height = '100%';

for (let i = 1; i < images.length; i++) {
  let img = images[i];

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