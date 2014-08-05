function testSlider(target) {
	//simple function that will toggle the notifications
	$element = $('.' + target);
    $element.attr("slide","yep!");
    setTimeout(function() {
    	$element.hide();
    	$element.attr("slide","");
    	$element.show();
    },1000); //set the timeout equal to your desired animation length
}

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