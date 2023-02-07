let lab;
$(document).ready(()=>{

  let $tabsPrice = $('#price .tabs');
  let i = 0;
  for (let name in pricesData) {
    $tabsPrice.find('.tabs__menu').append(`
      <div class="tabs__item ${i==0 ? 'active' : ''}">
        ${name}
      </div>
    `);
    $tabsPrice.find('.tabs__content').append(`
      <div class="tabs__content-item ${i==0 ? 'active wow fadeInLeft' : ''}">
        <div class="row">
        </div>
      </div>
    `);

    pricesData[name].forEach(pack => {
      $tabsPrice.find('.tabs__content-item .row').last().append(`
      <div class="col-lg-4 mb-5">
        <div class="price-block">
          <img src="img/price/${pack.img}">

          <h4>${pack.name}</h4>
          <p class="description">${pack.desc}</p>
          <p class="price-our">${pack.price}&#8381;</p>

          <button type="button" data-toggle="modal" data-target="#pack" class="button" data-pack='${JSON.stringify(pack)}' data-model="${name}">Подробнее</button>
        </div>
      </div>
      `);
    });
    i++;
  }

  $('button[data-toggle="modal"][data-target="#pack"]').on('click', function() {
    let $modal = $('#pack');
    let pack = $(this).data('pack');
    console.log(pack);

    $modal.find('.modal-title').text(pack.name);

    $modal.find('.carousel-indicators').html('');
    $modal.find('.carousel-inner').html('');
    pack.images.forEach((img, i) => {
      $modal.find('.carousel-indicators').append(`
      <li data-target="#pack-slider" data-slide-to="${i}" ${i==0 ? 'class="active"' : ''}></li>
      `);
      
      $modal.find('.carousel-inner').append(`
        <div class="carousel-item ${i==0 ? 'active' : ''}">
          <img class="modal-img d-block w-100" src="img/price/${img.path}" alt="${img.alt}">
          <div class="carousel-caption">
            <p class="description modal-description">${img.alt}</p>
          </div>
        </div>
      `);
    });

    $modal.find('.modal-list').html('');
    pack.services.forEach(service => {
      let moreHtml = '';
      if (service.more.length > 0) {
        moreHtml += '<ul class="modal-sublist">';
        service.more.forEach(item => {
          moreHtml += `<li class="modal-sublist_elem">${item}</lic>`
        });
        moreHtml += '</ul>';
      }

      $modal.find('.modal-list').append(`
        <li>
          <div class="row">
            <div class="col-8">${service.name} ${moreHtml}</div>
            <div class="col-4">
              <div class="modal-price">- ${service.price}&#8381;</div>
            </div>
          </div>
        </li>
      `);
    });

    $modal.find('.modal-total-price span').text(pack.price);

    $modal.find('.modal-button').data('pack', pack.name);
    $modal.find('.modal-button').data('model', $(this).data('model'));
  });

  $('.modal-button').on('click', function() {
    let newVal = 'Мне нужен ' + $(this).data('pack') + ' для ' + $(this).data('model');
    let valComment = $('#comment').val();
    if (valComment.trim() !== '') {
      valComment += "\r\n";
    }
    $('#comment').val(valComment + newVal);
  });


  // menu scroll
  $(window).scroll(()=>{
    menuScroll();
  });
  function menuScroll() {
    if ( $(window).width() > 767) {
      if ($(this).scrollTop() > 1) {
        $('.header-menu').addClass('menu-active');
      } else {
        $('.header-menu').removeClass('menu-active');
      }
    } else if( $('.header-menu').hasClass('menu-active') ) {
      $('.header-menu').removeClass('menu-active');
    }
  }
  menuScroll();

  //adaptive menu
  $('.adaptive-menu ul').on('click', function() {
    $('body').removeClass('menu_open');
  });

  //btn menu
  function btnMenu() {
    let btn = $('.btn-menu');
    btn.on('click', function() {
      let menu = $('body');
      menu.toggleClass('menu_open');
      btn.toggleClass('btn-menu_open');
    });
  }
  btnMenu();

  // button top
  $(window).scroll(()=>{
    if ($(this).scrollTop() > $('.header').outerHeight(true) - 78) {
      $('.button-top').addClass('button-active');
    } else {
      $('.button-top').removeClass('button-active');
    }

    let hTop = 50;
    if ($(window).width() < 576) {
      hTop = 35;
    }

    if ($(this).scrollTop() > $('.price').offset().top - $(window).height() + hTop &&
        $(this).scrollTop() < $('.price').offset().top + $('.price').outerHeight(true) - $(window).height() + hTop) {
      $('.button-top').addClass('button-price');
    } else {
      $('.button-top').removeClass('button-price');
    }
  });

  //stages adaptation
  $(window).resize(function() {
    stagesAdaptive();
  });
  
  let stages = false;
  function stagesAdaptive() {
    if ($(window).width() < 992 && !stages) {
      let elem = $('.stages-block:nth-child(odd) .row');
      
      for (let i = 0; i < elem.length; i++) {
        let child = $(elem[i]).children()[0];
        elem[i].append(child);
      }
      stages = true;
    } else if ($(window).width() >= 992 && stages) {
      let elem = $('.stages-block:nth-child(odd) .row');
      
      for (let i = 0; i < elem.length; i++) {
        let child = $(elem[i]).children()[0];
        elem[i].append(child);
      }
      stages = false;
    }
  }
  stagesAdaptive();


  // tabs 
  $('.tabs__item').on('click', function() {
    let $tabs = $(this).closest('.tabs');
    $tabs.find('.tabs__item').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index();
    $tabs.find('.tabs__content-item').removeClass('active')
    $tabs.find('.tabs__content-item').eq(index).addClass('active');
  });

  animate();
});

// adaptation animate
$(window).resize(function() {
  animate();
});
function animate() {
  if ($(window).width() < 992) {
    $('.fadeInLeft').removeClass('fadeInLeft').addClass('fadeIn');
    $('.fadeInRight').removeClass('fadeInRight').addClass('fadeIn');
    $('.fadeIn').removeClass('fadeIn').addClass('fadeIn');

    $('.why-we-item .fadeInUp').removeClass('fadeInUp');
    $('.why-we-slider').addClass('wow fadeIn');

    $('[data-wow-delay]').removeAttr('data-wow-delay');
  }
}