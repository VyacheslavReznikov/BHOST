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
	// $('.single-product__tabs .tab').on('click', function(event) {
	// 	var id = $(this).attr('data-id');
	// 		$('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
	// 		$('.single-product__tabs .tabs').find('.tab').removeClass('active');
	// 		$(this).addClass('active');
	// 		$('#'+id).addClass('active-tab').fadeIn();
	// 		return false;
	// 	});

// 	<div class="wrapper">
	// 	<div class="tabs">
// 	        <span class="tab active" data-id="1" >1 квітня</span>
// 	        <span class="tab" data-id="2">2 квітня</span>
	// 	</div>
	// 	<div class="tab_content">
	// 		<div class="tab-item active-tab" id="1">
	// 		</div>
	// 	</div>
// </div>

	// $('.wrapper .tab').on('click', function(event) {
	// 	var id = $(this).attr('data-id');
	// 		$('.wrapper').find('.tab-item').removeClass('active-tab').hide();
	// 		$('.wrapper .tabs').find('.tab').removeClass('active');
	// 		$(this).addClass('active');
	// 		$('#'+id).addClass('active-tab').fadeIn();
	// 		return false;
	// 	});

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


})

$('.package__slider').slick({
	prevArrow: '<button class="package__arrow package__arrow--prev" type="button"><i class="fas fa-long-arrow-alt-left"></i></button>',
	nextArrow: '<button class="package__arrow package__arrow--next" type="button"><i class="fas fa-long-arrow-alt-right"></i></button>',
	dots: true,
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