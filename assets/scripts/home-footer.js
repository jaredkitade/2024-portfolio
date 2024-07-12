$(document).ready(function () {

	$(function(){
		$(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var offset = $(".home-page-hero").offset().top;
	        var height = $(".home-page-hero").height();
	        var pageOffset = $(".page-container").offset().top;
	        var pageHeight = $(".page-container").height();
	        
	        if(scroll > offset + height - 25){
	            $(".nav").removeClass("negative");
	        } else {
	        	$(".nav").addClass("negative");
	        }

	        if(scroll > offset + height){
	            $("body").removeClass("body-black");
	        } else {
	        	$("body").addClass("body-black");
	        }
	        
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
	});

});

