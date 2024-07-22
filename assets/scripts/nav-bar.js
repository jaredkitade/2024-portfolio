$(document).ready(function () {

	// const observer = new IntersectionObserver(entries => {
	// 	entries.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			entry.target.classList.add('rule-full');
	// 			return;
	// 		}

	// 		entry.target.classList.remove('rule-full');
	// 	});
	// });

	// const rules = document.querySelectorAll('.rule');

	// rules.forEach((element) => observer.observe(element));



	// const labels = document.querySelectorAll('.label-hide');
	// const rules = document.querySelectorAll('.rule');
	// const categories = document.querySelectorAll('.project-categories>p');

	// const divs = [labels, rules, categories];

	// function animation(entires) {
	// 	entires.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			if (entry.target.classList.contains('.label-hide')) {
	// 				entry.target.classList.add('label-full');
	// 				return;
	// 			}

	// 			entry.target.classList.remove('label-full');

	// 			if (entry.target.classList.contains('rule')) {
	// 				entry.target.classList.add('rule-full');
	// 				return;
	// 			}

	// 			entry.target.classList.remove('rule-full');

	// 			if (entry.target.classList.contains('.project-categories>p')) {
	// 				entry.target.style.transform = 'skew(10deg)'
	// 			}
	// 		}
	// 	})
	// }
	
	// const observer = new IntersectionObserver(animation)
	// divs.forEach((div) => observer.observe(div));




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
		$(".color-01").toggleClass("blackout");
		$(".design-container").toggleClass("blackout");
		$(".svg-hero").toggleClass("blackout");
		$(".nav-page-link").removeClass("nav-page-link-open")
		$(".work-nav-link").removeClass("nav-active");
		$(".mobile-nav-project-column").removeClass("mnpc-open");
		$(".nav-number").toggleClass("nav-main-link-open");
		$(".nav-lp-link").toggleClass("nav-main-link-open");
		// $(".nav-row").toggleClass("nav-row-open");

	});

	$(".home-nav-link").click(function(){
		$(".home-nav-link").toggleClass("nav-active");
	});

	$(".work-nav-link").click(function(){
		$(".nav-page-link").toggleClass("nav-page-link-open");
		$(".work-nav-link").toggleClass("nav-active");
		$(".mobile-nav-project-column").toggleClass("mnpc-open");
	});

	$(".about-nav-link").click(function(){
		$(".about-nav-link").toggleClass("nav-active");
	});

	$(".contact-nav-link").click(function(){
		$(".contact-nav-link").toggleClass("nav-active");
	});

});

$(document).keyup(function(e) {
	if (e.keyCode == 27) { 
		if ($(".nav").hasClass("nav-open")) {$(".nav").removeClass("nav-open")};
		if ($(".nav-container").hasClass("nav-container-open")) {$(".nav-container").removeClass("nav-container-open")};
		if ($(".nav-item").hasClass("nav-item-open")) {$(".nav-item").removeClass("nav-item-open")};
		if ($(".menu").hasClass("close-menu")) {$(".menu").removeClass("close-menu")};
		if ($(".work").hasClass("nav-item-off")) {$(".work").removeClass("nav-item-off")};
		if ($(".about").hasClass("nav-item-off")) {$(".about").removeClass("nav-item-off")};
		if ($("body").hasClass("no-scroll")) {$("body").removeClass("no-scroll")};
		if ($("body").hasClass("body-menu")) {$("body").removeClass("body-menu")};
		if ($(".page-container").hasClass("blackout")) {$(".page-container").removeClass("blackout")};
		if ($(".footer-container").hasClass("blackout")) {$(".footer-container").removeClass("blackout")};
		if ($(".color-01").hasClass("blackout")) {$(".color-01").removeClass("blackout")};
		if ($(".design-container").hasClass("blackout")) {$(".design-container").removeClass("blackout")};
		if ($(".svg-hero").hasClass("blackout")) {$(".svg-hero").removeClass("blackout")};
		if ($(".nav-page-link").hasClass("nav-page-link-open")) {$(".nav-page-link").removeClass("nav-page-link-open")};
		if ($(".work-nav-link").hasClass("nav-active")) {$(".work-nav-link").removeClass("nav-active")};
		if ($(".nav-number").hasClass("nav-main-link-open")) {$(".nav-number").removeClass("nav-main-link-open")};
		if ($(".nav-lp-link").hasClass("nav-main-link-open")) {$(".nav-lp-link").removeClass("nav-main-link-open")};		
	}
});





