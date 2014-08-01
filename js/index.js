function testSlider(target) {
	//simple function that will toggle the notifications
    $('.' + target).addClass('slidedown');
    setTimeout(function() {
      $('.' + target).removeClass('slidedown');
    },2000); //set the timeout equal to your desired animation length
}