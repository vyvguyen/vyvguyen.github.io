$(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(1000).css('display', 'block');
});


$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 800);
		return false;
		}
	}
	});
});


function thumbnailGallery() {
	$(window).load(function(){


		var $container = $('.portfolio-gallery');

		$container.isotope({
				itemSelector : '.project',
				transitionDuration: '0.7s',
				masonry: {
					columnWidth: '.project-grid',
					gutter: '.gutter'
				},
	  			hiddenStyle: {
					opacity: 0
				},
				visibleStyle: {
					opacity: 1
				}
		});


		$container.imagesLoaded(function(){
			$container.isotope();
		});


		$('.portfolio-filter li a').click(function(){
			$('.portfolio-filter li a').removeClass('active');
			$(this).addClass('active');

	 
			var selector = $(this).attr('data-filter-project');
			$container.isotope({
				filter: selector
			});
			return false;
		});

		
	});

};


$('figure').on("touchstart", function (e) {
'use strict';
var link = $(this);
if (link.hasClass('hover')) {
    return true;
 } 
else {
   link.addClass('hover');
   $('figure').not(this).removeClass('.bw');
   e.preventDefault();
   return false;
  }
});


$(function() {
	var controller = new ScrollMagic.Controller();


	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo("#header", 1, {backgroundPosition: "0% 20%"}, {backgroundPosition: "0% 80%", ease: Linear.easeNone})
		]);


	var scene = new ScrollMagic.Scene({triggerElement: "#header", duration: 2500, offset: 100})
		.setTween(tween)
		.addTo(controller);
		
});


$(function() {
	var controller = new ScrollMagic.Controller();

	var fadein_tween = TweenMax.to('.fadeout', 1, {autoAlpha: 1});
	var fadeout_tween = TweenMax.to('.fadeout', 1, {autoAlpha: 0});


		var fadein_scene = new ScrollMagic.Scene({
			triggerElement: "main", 
			offset: 700,
			duration: 900,
			reverse: true
		})
			.setTween(fadein_tween)
			.triggerHook("onEnter")
			.addTo(controller);


		var fadeout_scene = new ScrollMagic.Scene({
			triggerElement: "main", 
			offset: 50,
			duration: 500,
			reverse: true
		})
			.setTween(fadeout_tween)
			.triggerHook("onEnter")
			.addTo(controller);

});


$(function() {
	var controller = new ScrollMagic.Controller();

	var fadein_tween = TweenMax.to('.section-nav', 1, {autoAlpha: 1, display:"block"});
	var fadeout_tween = TweenMax.to('.section-nav', 1, {autoAlpha: 0, display:"none"});


		var fadein_scene = new ScrollMagic.Scene({
			triggerElement: "header", 
			offset: $(window).height() - 100,
			duration: 100
		})
			.setTween(fadein_tween)
			.triggerHook("onLeave")
			.addTo(controller);


		var fadeout_scene = new ScrollMagic.Scene({
			triggerElement: "header", 
			offset: $(window).height() - 10,
			duration: 100
		})
			.setTween(fadeout_tween)
			.triggerHook("onEnter")
			.addTo(controller);

});


$(function() {
	var controller = new ScrollMagic.Controller();


	$('.section-title').each(function() {


		var tween = TweenMax.from($(this), 1, {top: 100, ease: Linear.easeNone});


		var scene = new ScrollMagic.Scene({
			triggerElement: this, 
			duration: $(window).height(), 
			offset: 0
		})


		.setTween(tween)
		.triggerHook("onEnter")
		.addTo(controller);
	  
	});

}); 


$(function() {
	thumbnailGallery();
});