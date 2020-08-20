$(function() {

	// смена фона фиксированного блока (header) 
	$(document).scroll(function() {
    let $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
	})

	// burger
	$('.burger').on('click', function() {
		$('.burger, .menu').toggleClass('active')		
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










})