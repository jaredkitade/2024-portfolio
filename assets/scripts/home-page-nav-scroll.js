// $(document).scroll(function() {
// 	if($(document).scrollTop() >= 750 ) {
// 		$('.nav').removeClass('negative');
// 	} else {
// 		$('.nav').addClass('negative');
// 	}
// });

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var offset = $('.home-page-hero').offset().top; // pixels to the top of div1
        var height = $('.home-page-hero').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > offset + height - 75){
            $('.nav').removeClass('negative');
        } else {
        	$('.nav').addClass('negative');
        }

    });
});