$(document).ready(function() {
	$(window).on('scroll', function() {
		scrollPosition = $(this).scrollTop();
		if (scrollPosition >= 50) {
			$("img").addClass('show');
			console.log("show");
		} else {
			$("img").removeClass('show');
		}
	});
});
