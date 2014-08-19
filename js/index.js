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
function imgPopout(host) {
	//simple modular popup that switches the image source and unhides the mod
	$('.modImg').attr("src", $(host).attr('src'));
	$('.modPop').removeClass('hideMe');
	$('.modFrame').removeClass('hideMe');
	$('.modImg').removeClass('hideMe');
}

$(document).ready(function () {
	$('#WebDev').click(function () {
		//todo: add code to switch out the content
		$('#Software').removeClass("selected");
		slideContentDown('showcase');
		$(this).addClass("selected");
	});	
	$('.modPop').click(function () {
		$('.modPop').addClass('hideMe');
		$('.modFrame').addClass('hideMe');
		$('.modImg').addClass('hideMe');
	});
	$('.projectTile').click(function() {
		var newProjectNum = $(this).attr("projectnumber");
		$('.projectTile.selected').removeClass('selected');
		switchProject(newProjectNum);
		$(this).addClass('selected');
	});	
	$('.subMenu.hoverText').click(function() {
		var newContentNum = $(this).attr("contentnumber");
		$('.subMenu.selected').removeClass('selected');
		switchContent(newContentNum);
		$(this).addClass('selected');
	});
});