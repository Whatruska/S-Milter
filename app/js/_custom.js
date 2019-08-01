document.addEventListener("DOMContentLoaded", function() {
	function drag() {
		$('.owl-nav').removeClass('disabled');
	}
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
	$('.owl-carousel-services').owlCarousel({
		loop : true,
		nav : true,
		smartSpeed : 700,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsiveClass : true,
		onDragged: drag,
		responsive : {
			0: {
				items : 1
			},
			800: {
				items : 2
			},
			1100 :{
				items : 3
			}
		}
	});
	$('.owl-carousel-partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autowidth: true,
		margin : 15,
		lazyLoad: true,
		onDragged: drag,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			500:{
				items: 2
			},
			800: {
				items: 3
			},
			1100: {
				items: 4
			}
		}
	});
	$('.owl-nav').removeClass('disabled');
	$('.owl-nav').on('click', function(){
		$('.owl-nav').removeClass('disabled');
	});
	$('.service-equal').matchHeight({
		property: 'height'
	});
	$('.btn-callback').on('click', function(e){
		e.preventDefault();
		$('.callback-form').css({
			animation: "blur 2.0s"
		});
		$('.notify').css({
			animation: "showNotify 1.5s",
			"z-index" : 3
		});
		setTimeout(function(){
			$('.notify').css({
				opacity: 1
			});
		},1500);
		setTimeout(function(){
			$('.callback-form').css({
				filter: "blur(10px)"
			});
		},500);
	});

	var marks = $('.fotorama-review-item-mark');
	marks.each(function(i){
		var starCount = parseInt(marks[i].innerHTML);
		marks[i].innerHTML = '';
		for(var ind = 0; ind < 5; ind++){
			if(ind < starCount){
				$('<i class="fas fa-star fotorama-review-item-mark-star fotorama-review-item-mark-star-active"/>').appendTo(marks[i]);
			}
			else{
				$('<i class="fas fa-star fotorama-review-item-mark-star"/>').appendTo(marks[i]);
			}
		}
	});
});