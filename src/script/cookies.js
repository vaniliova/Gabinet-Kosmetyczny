$(()=>{

  var Cookie = function(o,e) {

  	this.block = document.querySelector(o),
  	this.closeIcon = document.querySelector(e),

  	this.block.style.display="block",

  	this.getInfo() ? this.hideBlock() : this.closeIcon.addEventListener(
  		"click", function() {
  			this.setCookie(),
  			this.hideBlock()}.bind(this)
  )};

	Cookie.prototype.getInfo = function() {

		if (window.localStorage)
			return "1" === window.localStorage.getItem("cookie")? !0 : !1;

		  this.cookie = document.cookie.split(";");

		  for(var o = 0, e = this.cookie.length; e > o; o++)
			 return "cookie=1" === this.cookie[o] ? !0 : !1
	},

	Cookie.prototype.hideBlock = function() {
		this.block.style.display = "none"
	},
	Cookie.prototype.setCookie = function() {
		window.localStorage ? window.localStorage.setItem("cookie","1") : ( this.date = new Date,
																																				this.date.setTime( this.date.getTime() + 31536e6 ),
																																				this.expires = "expires=" + this.date.toUTCString(),
																																				document.cookie="cookie=1;"+this.expires)
	};

  var cookie = new Cookie(".cookie", ".cookie__close__icon");

});
