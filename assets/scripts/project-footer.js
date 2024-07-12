$(document).ready(function () {

		$(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var pageOffset = $(".page-container").offset().top;
	        var pageHeight = $(".page-container").height();
	        
	        if(scroll > pageOffset + pageHeight - 900){
	            $(".mobile-nav").addClass("filled");
	        } else {
	        	$(".mobile-nav").removeClass("filled");
	        }

	        // if(scroll < pageOffset + pageHeight){
	        //     $(".footer-container").removeClass("off");
	        // } else {
	        // 	$(".footer-container").addClass("off");
	        // }

	    });
});