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
      var slider = $("#lightSlider-opinions").lightSlider({
         item: 3,
         loop: true,
         slideMargin: 50,
         auto: false,
         speed: 800,
         pause: 5000,
         pauseOnHover: true,
         controls: false,
         centerSlide: true,
         adaptiveHeight:true,
         pager: false,
       });

       $('.goToPrevSlide').on('click', function () {
           slider.goToPrevSlide();
       });
       $('.goToNextSlide').on('click', function () {
           slider.goToNextSlide();
       });

       var sliderNews = $("#lightSlider-news").lightSlider({
          item: 3,
          loop: true,
          slideMargin: 50,
          auto: false,
          speed: 800,
          pause: 5000,
          pauseOnHover: true,
          controls: false,

        });

        // $('.goToPrevSlide').on('click', function () {
        //     sliderNews.goToPrevSlide();
        // });
        // $('.goToNextSlide').on('click', function () {
        //     sliderNews.goToNextSlide();
        // });

        //offer slider

        let pricesBox = $(".salon-prices");
        let offerBox = $(".offer__type");
        let backBtn = $(".prices-back");

        offerBox.on('click', function() {
          console.log('klik działa');
          $('.bg').addClass('dark');
          pricesBox.animate({
            right: "10%",
          },500)
          // $('body').
          backBtn.on('click', function(e) {
            e.preventDefault();
            $('.bg').removeClass('dark');
            pricesBox.animate({
              right: "-100%",
            },500)
          })
        });



}); //end of DOMContentLoaded
