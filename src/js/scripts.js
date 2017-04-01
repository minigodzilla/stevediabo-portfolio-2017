(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell

    // function resetView() {
    // 	$('body').removeClass();
    // 	$('main').removeClass();
    // }

    // listeners

    $('.touchable').on('mousedown touchstart', function() {
		$(this).addClass('pressed');
	    $(this).on('mouseup touchend', function() {
			$(this).removeClass('pressed');
		});
	});

	// nav buttons

	$('nav ul li').on('mouseup touchend', function() {

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
