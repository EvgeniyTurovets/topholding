$(function(){
	$('.burger').click(function(){
		$(this).toggleClass('active')
		$('.nav').fadeToggle()
	})

	$('.lang').click(function(){
		$('.lang__wrap').fadeIn(200)
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".lang"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.lang__wrap').fadeOut(200)
		}
	});


	if($(window).width() > 767){
		new WOW().init();
	}

	
	$('.slider__right').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: false,
		infinite: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1023,
			  settings: {
				slidesToShow: 1,
				vertical: false,
			  }
			},
		]
	});
	
	$('.slider__right').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slider__left .slider__left__item').removeClass('active')
		$('.slider__left .slider__left__item').eq(nextSlide).addClass('active')
	});
	
	if($('.slider__left').length){
		$('.slider__left .slider__left__item').eq(0).addClass('active')
	}

	$('.select').selectric();

	$("#contactval").validate({
		errorPlacement: function(error,element) {
			return true;
		  },

		submitHandler: function(form) {
		// do other things for a valid form
			formSubmite()
		}
	})
	function formSubmite(){
		$('.contact2').addClass('submite-form')
		$('#contactval').fadeOut()
		$('.contact_no_confirm').hide()
		$('.contact_confirm').fadeIn()
	}


})