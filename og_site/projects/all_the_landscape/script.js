$(document).ready(function() {
	$(window).scroll(function() {
		$('.text').addClass('fade');
		if ($(window).scrollTop() === 0) {
			$('.text').removeClass('fade');
		}
	});
});
