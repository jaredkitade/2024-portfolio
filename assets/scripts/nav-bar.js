$(document).ready(function () {

	$(".menu").click(function(){
		$(".nav").toggleClass("nav-open");
		$(".mobile-nav").toggleClass("mobile-nav-open");
		$(".nav-container").toggleClass("nav-container-open");
		$(".mobile-nav-container").toggleClass("nav-container-open");
		$(".nav-item").toggleClass("nav-item-open");
		$(".menu").toggleClass("close-menu");
		$(".work").toggleClass("nav-item-off");
		$(".about").toggleClass("nav-item-off");
		$("body").toggleClass("no-scroll");
		$("body").toggleClass("body-menu");
		$(".page-container").toggleClass("blackout");
		$(".footer-container").toggleClass("blackout");
		$(".svg-hero").toggleClass("blackout");
		$(".nav-page-link").removeClass("nav-page-link-open")
		$(".work-nav-link").removeClass("nav-active");
		$(".mobile-nav-project-column").removeClass("mnpc-open");
		$(".nav-number").toggleClass("nav-main-link-open");
		$(".nav-lp-link").toggleClass("nav-main-link-open");
		// $(".nav-row").toggleClass("nav-row-open");

	});

	$(".work-nav-link").click(function(){
		$(".nav-page-link").toggleClass("nav-page-link-open");
		$(".work-nav-link").toggleClass("nav-active");
		$(".mobile-nav-project-column").toggleClass("mnpc-open");
	});

});