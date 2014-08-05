$(document).ready(function () {
	$('#WebDev').click(function () {
		$('#Software').removeClass("selected");
		testSlider('showcase');
		$(this).addClass("selected");
	});
	$('img').click(function () {		
		$('.modImg').attr("src", $(this).attr("src"));
		$('.modPop').removeClass('hideMe');
		$('.modFrame').removeClass('hideMe');
		$('.modImg').removeClass('hideMe');
	});
	$('.modPop').click(function () {
		$('.modPop').addClass('hideMe');
		$('.modFrame').addClass('hideMe');
		$('.modImg').addClass('hideMe');
	});
});