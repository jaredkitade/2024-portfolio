$(document).ready(function () {

	$(".menu").click(function(){
		$(".nav").toggleClass("nav-open");
		$(".mobile-nav").toggleClass("nav-open");
		$(".nav-container").toggleClass("nav-container-open");
		$(".mobile-nav-container").toggleClass("nav-container-open");
		$(".nav-item").toggleClass("nav-item-open");
		$(".menu").toggleClass("close-menu");
		$(".work").toggleClass("nav-item-off");
		$(".about").toggleClass("nav-item-off");
		$("body").toggleClass("no-scroll");
		$("body").toggleClass("");
		$(".page-container").toggleClass("off");
		$(".footer-container").toggleClass("black-text");
	});

});