$(document).ready(function () {

	$(".menu").click(function(){
		$(".nav").toggleClass("nav-open");
		$(".nav-container").toggleClass("nav-container-open");
		$(".nav-item").toggleClass("nav-item-open");
		$(".menu").toggleClass("close-menu");
		$(".work").toggleClass("nav-item-off");
		$(".about").toggleClass("nav-item-off");
		$("body").toggleClass("no-scroll");
		$("body").toggleClass("body-menu-open");
		$(".page-container").toggleClass("page-container-menu-open");
		$(".home-page-container").toggleClass("page-container-menu-open");
	});

	$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var offset = $('.home-page-hero').offset().top;
        var height = $('.home-page-hero').height();
        if(scroll > offset + height - 75){
            $('.nav').removeClass('negative');
        } else {
        	$('.nav').addClass('negative');
        }

    });
});