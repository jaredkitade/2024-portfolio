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
		$("body").toggleClass("body-menu-open");
		$(".page-container").toggleClass("page-container-menu-open");
		$(".footer-container").toggleClass("off");
		$(".home-page-container").toggleClass("page-container-menu-open");
	});

	$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var offset = $('.home-page-hero').offset().top;
        var height = $('.home-page-hero').height();
        
        if(scroll > offset + height - 25){
            $('.nav').removeClass('negative');
        } else {
        	$('.nav').addClass('negative');
        }

        if(scroll > offset + height){
            $('body').removeClass('home-page-load-bg');
        } else {
        	$('body').addClass('home-page-load-bg');
        }
        
        if(scroll > 40) {
            $('.mobile-nav').removeClass('negative');
        } else {
        	$('.mobile-nav').addClass('negative');
        }

    });

});