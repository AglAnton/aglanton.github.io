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

    if ($(this).scrollTop() > $('.price').offset().top - $('.price').outerHeight(true) + 80 &&
        $(this).scrollTop() < $('.price').offset().top + 80) {
      $('.button-top').addClass('button-price');
    } else {
      $('.button-top').removeClass('button-price');
    }
  });

  //stages adaptation
  $(window).resize(function(){
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

  // form
  //accordion
  $('.accordion').on('click', function (e) {
    if ($(e.target).hasClass('panel') ||
        $(e.target).hasClass('accordion-paragraph') ||
        $(e.target).hasClass('accordion-arrow')) {

      $(this).toggleClass('accordion-active');
      $(this).find('.content').slideToggle(200);

    }
  });

});