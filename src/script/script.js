if($('body').hasClass('page-index')) {
  require('./cookies.js');
}


$(() => {
  //scroll effect on buttons
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
  });

  //scroll effect on mouseScroll

  // $(function(){
  //
  // 	var $window = $(window);		//Window object
  //
  // 	var scrollTime = 1.2;			//Scroll time
  // 	var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
  //
  // 	$window.on("mousewheel DOMMouseScroll", function(event){
  //
  // 		event.preventDefault();
  //
  // 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
  // 		var scrollTop = $window.scrollTop();
  // 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
  //
  // 		TweenMax.to($window, scrollTime, {
  // 			scrollTo : { y: finalScroll, autoKill:true },
  // 				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
  // 				autoKill: true,
  // 				overwrite: 5
  // 			});
  //
  // 	});
  //
  // });

  // Hamburger button
   $('.hamburger__btn').click(function() {
     $(this).toggleClass('close');
     // $('.menu').toggleClass("show");
   });

   //Home page sliders
      var slider = $("#lightSlider").lightSlider({
         item: 3,
         loop: true,
         slideMargin: 50,
         auto: false,
         speed: 800,
         pause: 5000,
         pauseOnHover: true,
         controls: false,
       });

       $('#goToPrevSlide').on('click', function () {
           slider.goToPrevSlide();
       });
       $('#goToNextSlide').on('click', function () {
           slider.goToNextSlide();
       });

}); //end of DOMContentLoaded
