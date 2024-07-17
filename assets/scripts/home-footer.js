$(document).ready(function () {

		$(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var offset = $(".home-page-hero").offset().top;
	        var height = $(".home-page-hero").height();
	        var pageOffset = $(".page-container").offset().top;
	        var pageHeight = $(".page-container").height();
	        
	        if(scroll > offset + height + 75){
	            $(".nav").removeClass("negative");
	        } else {
	        	$(".nav").addClass("negative");
	        }

	        // if(scroll > offset + height){
	        //     $("body").removeClass("body-black");
	        // } else {
	        // 	$("body").addClass("body-black");
	        // }
	        
	        if(scroll > 40) {
	            $(".mobile-nav").removeClass("negative");
	        } else {
	        	$(".mobile-nav").addClass("negative");
	        }

	        if(scroll > pageOffset + pageHeight - 900){
	            $(".mobile-nav").addClass("filled");
	        } else {
	        	$(".mobile-nav").removeClass("filled");
	        }

	        // if(scroll > pageOffset + pageHeight - 950){ // works on mobile but footer disappears on destkop. need to figure out JS media query here
	        //     $(".footer-container").removeClass("off");
	        // } else {
	        // 	$(".footer-container").addClass("off");
	        // }

	    });

	    $(window).on('scroll', function(){

			// var contentTop = $('.page-container').offset().top;
			var hHeight = $('.home-page-hero').height();

			if($(this).scrollTop() > hHeight + 45){
				$('.nav').removeClass('negative');
			} else{
				$('.nav').addClass('negative');
			}

			if($(this).scrollTop() > hHeight + 150){
				$('.home-page-hero').addClass('off');
				$('.footer-container').removeClass('off');
			} else{
				$('.home-page-hero').removeClass('off');
				$('.footer-container').addClass('off');
			}

			if($(this).scrollTop() > hHeight + 100){
				$("body").removeClass("body-black");
	        } else {
	        	$("body").addClass("body-black");
			}

		}).scroll();

});

