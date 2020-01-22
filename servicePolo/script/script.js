let lab;
$(document).ready(()=>{

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
animate();
