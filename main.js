webpackJsonp([0],[,function(e,o,t){"use strict";(function(e){e("body").hasClass("page-index")&&t(5),e(function(){e(document).on("click",'a[href^="#"]',function(o){o.preventDefault(),e("html, body").animate({scrollTop:e(e.attr(this,"href")).offset().top},400)}),e(".hamburger__btn").click(function(){e(this).toggleClass("close")});var o=e("#lightSlider-opinions").lightSlider({item:3,loop:!0,slideMargin:50,auto:!1,speed:800,pause:5e3,pauseOnHover:!0,controls:!1,centerSlide:!0,adaptiveHeight:!0,pager:!1});e(".goToPrevSlide").on("click",function(){o.goToPrevSlide()}),e(".goToNextSlide").on("click",function(){o.goToNextSlide()});var t=(e("#lightSlider-news").lightSlider({item:3,loop:!0,slideMargin:50,auto:!1,speed:800,pause:5e3,pauseOnHover:!0,controls:!1}),e(".salon-prices")),i=e(".offer__type"),n=e(".prices-back");i.on("click",function(){console.log("klik działa"),e(".bg").addClass("dark"),t.animate({right:"10%"},500),n.on("click",function(o){o.preventDefault(),e(".bg").removeClass("dark"),t.animate({right:"-100%"},500)})})})}).call(o,t(0))},function(e,o){},,,function(e,o,t){"use strict";(function(e){e(function(){var e=function(e,o){this.block=document.querySelector(e),this.closeIcon=document.querySelector(o),this.block.style.display="block",this.getInfo()?this.hideBlock():this.closeIcon.addEventListener("click",function(){this.setCookie(),this.hideBlock()}.bind(this))};e.prototype.getInfo=function(){if(window.localStorage)return"1"===window.localStorage.getItem("cookie");this.cookie=document.cookie.split(";");for(var e=0,o=this.cookie.length;o>e;e++)return"cookie=1"===this.cookie[e]},e.prototype.hideBlock=function(){this.block.style.display="none"},e.prototype.setCookie=function(){window.localStorage?window.localStorage.setItem("cookie","1"):(this.date=new Date,this.date.setTime(this.date.getTime()+31536e6),this.expires="expires="+this.date.toUTCString(),document.cookie="cookie=1;"+this.expires)};new e(".cookie",".cookie__close__icon")})}).call(o,t(0))},,function(e,o,t){t(1),e.exports=t(2)}],[7]);