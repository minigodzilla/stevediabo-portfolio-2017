/*!
 * stevediabo.com
 * Personal Portfolio of Steve Diabo
 * https://stevediabo.com
 * @author Steve Diabo
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {

  	// disable overscroll in non-scrolling areas

	$('header, main .view h3').on('touchmove',function(event) {
		event.preventDefault();
	});

	//owl carousel init

	$('.owl-carousel').owlCarousel({
	    loop: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items: 1,
	            nav: false
	        },
	        480:{
	            items: 2,
	            nav: false
	        },
	        768:{
	            items: 2,
	            stagePadding: 38,
	            margin: 40,
	            nav: true
	        },
	        1024:{
	            items: 3,
	            stagePadding: 38,
	            margin: 20,
	            nav: true
	        }
	    }
	});

	// jquery css scrollbar init

	$('.scrollbar-inner').scrollbar();

    // listeners

    $('.touchable').on('mousedown touchstart', function() {
		$(this).addClass('pressed');
	    $(this).on('mouseup touchend', function() {
			$(this).removeClass('pressed');
		});
	});

	// nav buttons

	$('nav ul li.nav-link').on('mouseup touchend', function() {

		var href = $(this).attr('data-href');

		$('body').addClass('nav-tapped');

		$('*[data-view-name=' + href + ']').addClass('shown');

		setTimeout(function() {
			$('body').addClass('header-locked');
			$('*[data-view-name=' + href + ']').addClass('locked');
		},500);

		setTimeout(function() {
			$('*[data-view-name=' + href + ']').addClass('back-btn-deployed');
		},1000);

	});
	
	// back buttons

	$('main .view h3 .btn-back').on('mouseup touchend', function() {

		var href = $(this).parents().parents().attr('data-view-name');

		$('*[data-view-name=' + href + ']').removeClass('back-btn-deployed');

		setTimeout(function() {
			$('*[data-view-name=' + href + ']').removeClass('locked');
			$('body').removeClass('header-locked');
		},500);

		setTimeout(function() {
			$('body').removeClass('nav-tapped');
		},1000);

		setTimeout(function() {
			$('*[data-view-name=' + href + ']').removeClass('shown');
		},1500);

	});
	

  });

})(jQuery, window, document);
