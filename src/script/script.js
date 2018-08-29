if($('body').hasClass('page-index')) {
  require('./cookies.js');
}


$(() => {
  //scroll effect
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
  });

  // Hamburger button
   $('.hamburger__btn').click(function() {
     $(this).toggleClass('close');
     // $('.menu').toggleClass("show");
   });

   //Home page sliders
      var slider1 = $("#lightSlider").lightSlider({
         item: 1,
         loop: true,
         slideMargin: 50,
         auto: false,
         speed: 800,
         pause: 5000,
         pauseOnHover: true,
         controls: false,
       });

       $('#goToPrevSlide').on('click', function () {
           slider1.goToPrevSlide();
       });
       $('#goToNextSlide').on('click', function () {
           slider1.goToNextSlide();
       });

}); //end of DOMContentLoaded
