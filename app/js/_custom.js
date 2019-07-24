document.addEventListener("DOMContentLoaded", function() {
	$('#my-menu').mmenu({
		extensions:[
			'widescreen',
			'theme-black',
			'effect-menu-slide',
			'pagedim-black',
			'position-right'
		],
		navbar : {
			title : '<img src="img/logo-1.svg">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});
	$('.mm-listitem_selected i').removeClass('far').addClass('fas');
	// Custom JS

});
