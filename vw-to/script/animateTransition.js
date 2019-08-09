function animateTransition(time = 300) {

  $(document).ready(function(){
    $('body').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, time);
    });
  });

}