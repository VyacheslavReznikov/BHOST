$(function() {

	// смена фона фиксированного блока (header) 
	$(document).scroll(function() {
    let $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
	})

	// burger
	$('.burger').on('click', function() {
		$('.burger, .menu').toggleClass('active')	
		$('body').toggleClass('lock')
	})

	//choose tabs
	$('.tabs .tabs__btn').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.tabs').find('.tabs__content').removeClass('active-tab').hide();
			$('.tabs .tabs__controls').find('.tabs__btn').removeClass('active');
			$(this).addClass('active');
			$('#'+id).addClass('active-tab').fadeIn();
			return false;
		});


	// questions
	$('.question__query').on('click', function() {		
		$(this).prev('.question__answer').slideToggle()	
		$(this).parent().toggleClass('question__line--active')	
	})
	


	$('.slider-fullscreen__body').slick({
		prevArrow: '<button class="slider-fullscreen__arrow slider-fullscreen__arrow--prev" type="button"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button class="slider-fullscreen__arrow slider-fullscreen__arrow--next" type="button"><i class="fas fa-angle-right"></i></button>',
		appendArrows: $('.slider-fullscreen__controls'),
		responsive: [
			{
				breakpoint: 577,
				settings: {
					arrows: false,
					autoplay: true       
				}
			}
		]
	})

	$('.subscribe-bottom__slider').slick({
		prevArrow: '<button class="subscribe-bottom__arrow subscribe-bottom__arrow--prev" type="button"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button class="subscribe-bottom__arrow subscribe-bottom__arrow--next" type="button"><i class="fas fa-angle-right"></i></button>',
		slidesToShow: 4,
		adaptiveHeight: true,
		appendArrows: $('.subscribe-bottom__controls'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1
				}
			}
		]


	})

	$('.package__slider').slick({
		prevArrow: '<button class="package__arrow package__arrow--prev" type="button"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow: '<button class="package__arrow package__arrow--next" type="button"><i class="fas fa-long-arrow-alt-right"></i></button>',
		dots: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					arrows: false
				}
			}
		]
	})

	$('.happy__slider').slick({
		arrows: false,
		dots: true,
		// autoplay: true,
	})






	if ($('.question__body').length) {
		var mixer = mixitup('.question__body');
	}


})