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
	            $("body").removeClass("home-page-load-bg");
	        } else {
	        	$("body").addClass("home-page-load-bg");
	        }
	        
	        if(scroll > 40) {
	            $(".mobile-nav").removeClass("negative");
	        } else {
	        	$(".mobile-nav").addClass("negative");
	        }

	        if(scroll > pageOffset + pageHeight - 850){
	            $(".mobile-nav").addClass("filled");
	        } else {
	        	$(".mobile-nav").removeClass("filled");
	        }

	        if(scroll > pageOffset + pageHeight){
	            $(".footer-container").addClass("off");
	        } else {
	        	$(".footer-container").removeClass("off");
	        }

	    });
	});

});

