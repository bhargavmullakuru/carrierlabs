$(document).ready(function(){

    'use strict';
	
	$('body').scrollspy({ target: '#navbar-example' })
	
	// -----------------------------------------
    // fixed-top
    // -----------------------------------------
	$(document).scroll(function () {
		var $nav = $(".fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
	jQuery(window).on('scroll resize', function () {
		var currentSection = null;
		jQuery('.section').each(function () {
			var element = jQuery(this).attr('id');
			if (jQuery('#' + element).is('*')) {
				if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 115)
				{
					currentSection = element;
				}
			}
		});

		jQuery('#top-nav ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
	});
	
	
	// -----------------------------------------
    // Smooth Scroll
    // -----------------------------------------
    $('a.data-scroll').on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 75
        }, 1000);
    });

	
	
	/*----------------------------
		 Paralax
	------------------------------ */ 
	$('#owl-demo1').woolParalax();
	$('#s-shape').woolParalax();
	var rellax = new Rellax('.rellax');
	
	
	
	// -----------------------------------------
    // portfolio
    // -----------------------------------------
	$(window).on('load',function() {
		$('.works').isotope({
		  layoutMode: 'packery',
		  itemSelector: '.works-item',
		  percentPosition: true,
		  packery: {
			gutter: '.works-sizer'
		  }
		});	
	});	
	$(' #da-thumbs > div ').each (function() { $(this).hoverdir(); } );
	
	
	// -----------------------------------------
    // owlCarousel slider
    // -----------------------------------------
	  var mainSlider;
	  mainSlider = $('#owl-demo1');
	  mainSlider.owlCarousel({
		autoplay: true,
		dots:false,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		autoplaySpeed: 1000,
		lazyLoad: true,
		mouseDrag:false,
		loop: true,
		items: 1,
	  });

	  mainSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('data-navipicture');
		$('.navNext').find('img').attr('src', next);
	  });
	$('.navNext').on('click', function() {
	  mainSlider.trigger('next.owl.carousel', [300]);
	  return false;
	});
	
	
	// -----------------------------------------
    // owlCarousel testimonial
    // -----------------------------------------
	$("#owl-demo").owlCarousel({
		items: 2,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : [""],
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
	
	
	
    // -----------------------------------------
    // fancybox 
    // -----------------------------------------
	$('[data-fancybox]').fancybox({
	  protect: true,
	  animationEffect: "fade",
	  hash: null,
	});
	
	
    // -----------------------------------------
    // Preloader 
    // -----------------------------------------
	$(window).on('load',function() {
		$("#PreloaderG1").delay(1000).fadeOut(500);
	});
	
}); // JQuery end