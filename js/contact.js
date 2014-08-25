var formText = "This form will prepare an email link. Alternatively, you could could use the icon to the right.";
var formMarkup = "<form class='myForm'><div class='doubleLine'><input type='text' id='fName' placeholder='First Name' class='registerItem'><input type='text' id='lName' placeholder='Last Name' class='registerItem'></div>\
<input type='text' id='subject' placeholder='Subject' class='registerItem'><textarea class='registerItem' rows='4' id='message' placeholder='Type what you want to say here!' wrap='hard'></textarea><br/>\
<button type='submit' class='formSubmit blue registerButton' onclick='generateEmailLink()'>Generate Email</button></form>";
var socialMediaArray = [];
socialMediaArray.push({pageLink: "mailto:jacob.callahan05@gmail.com", icon: "images/gmail.png"});
socialMediaArray.push({pageLink: "http://www.linkedin.com/in/jacobcallahan/", icon: "images/linkedIn.png"});
socialMediaArray.push({pageLink: "https://github.com/JacobCallahan", icon: "images/github.png"});

function getSocialMediaMarkup(socialMediaObject) {
	return "<a href='" + socialMediaObject.pageLink + "' target='blank'><img src='" + socialMediaObject.icon + "' class='colorInvert'></a>";
}

function getContactShowcaseMarkup() {
	var markup = "<div class='showcaseText'>";
	markup += formText;
	markup += formMarkup;
	markup += "</div><div class='mainContent' style='width: 170px; padding:20px;'> <!-- reusing the class-->";
	for (var i = 0; i < socialMediaArray.length; i++) {
		markup += getSocialMediaMarkup(socialMediaArray[i]);
	};
	markup += "</div></div>";
	return markup;
}

function getContactMarkup() {
	var markup = "<div class='subMenu'><h2>Contact Me</h2></div><div class='showcase'><div class='flexRow'><aside class='sidePanel'></aside><div class='showcaseHolder'><div class='showcasePane'><div class='showcaseTop'></div><div class='showcaseBody'>";
	markup += getContactShowcaseMarkup();
	markup += "</div></div><aside class='sidePanel'></aside></div>";
	return markup;
}

function generateEmailLink() {
	var subject = encodeURIComponent(document.getElementById('subject').value);
	var body = encodeURIComponent(document.getElementById('message').value + "\r\n\n" + document.getElementById('fName').value + " " + document.getElementById('lName').value);
	var emailLink = "<a href='mailto:jacob.callahan05@gmail.com?subject=" + subject + "&body=" + body + "' target='blank'>Click me to open prepared email</a>";
	return emailLink;
}

$('.formSubmit').click(function(e) {
	e.preventDefault();
	$('.formSubmit').after(generateEmailLink()).slideDown();
});