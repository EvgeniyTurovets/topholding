$(function(){
	$('.burger').click(function(){
		$(this).toggleClass('active')
		$('.nav').fadeToggle()
	})
})