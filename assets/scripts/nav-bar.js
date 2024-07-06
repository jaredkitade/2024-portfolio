$(document).ready(function () {
	$(".menu").click(function(){
		$(".nav").toggleClass("nav-open");
		// $(".nav").toggleClass("gradient-background-warm");
		$(".nav-container").toggleClass("nav-container-open");
		$(".menu").toggleClass("close-menu");
		$(".work").toggleClass("nav-item-off");
		$(".about").toggleClass("nav-item-off");
		$("body").toggleClass("no-scroll");
		$("body").toggleClass("body-menu-open");
		// $("body").toggleClass("gradient-background-warm");
		$(".page-container").toggleClass("page-container-menu-open");
		$(".home-page-container").toggleClass("page-container-menu-open");
	});
});