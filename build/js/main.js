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


	
	
})