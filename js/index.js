function slideContentDown(target) {
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
		//todo: add code to switch out the content
		$('#Software').removeClass("selected");
		slideContentDown('showcase');
		$(this).addClass("selected");
	});
	$('img').click(function () {	
		//simple modular popup that switches the image source and unhides the mod	
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