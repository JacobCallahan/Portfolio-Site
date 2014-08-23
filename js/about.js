//since this is a much simpler sub-site, we won't need as much supporting objects to
//have everything work nicely
var  bioPic = "biopic.png";
var bioText = "<p>Jacob has always been fascinated by the magic of computers and internet technologies. However, it wasn’t until his senior year of High School, when he took his first true programming course that he truly fell in love with creating software and developing websites. Visual Basic, social media sites, and even graphing calculators; everything became an opportunity to expand his skillset and technical reach. After enlisting in the Air Force, he discovered his other talent: identifying inefficient processes and tasks in desperate need for automation. He then combined the two talents to create tools and products for his colleagues to use, resulting in increased productivity and decreased error rates.</p>\
            <p>In the years since he began his journey, he has picked up nearly every major programming language and development technique. Focusing particularly on data structures and object oriented programming. His web development skills progressed from blinking marquees to beautiful HTML5 and CSS3 responsive layouts. He constantly strives to enforce his principles of efficiency, stability, and ease of use. Jacob is most recently enthralled with the application of Artificial Intelligence, more specifically Machine Learning techniques.</p>\
            <p>When not referring to himself in the third person or learning a new technology, he enjoys spending time with his beautiful wife, dog and hedgehog! His other hobbies include: playing bass, progressive metal, and ultimate Frisbee. Please feel free to check out a few of his works or contact him above</p>"
var skillArray = [];
skillArray.push({level: "2", skill: "Artificial Intelligence"});
skillArray.push({level: "5", skill: "C/C++"});
skillArray.push({level: "4", skill: "C#"});
skillArray.push({level: "9", skill: "CSS3"});
skillArray.push({level: "10", skill: ">HTML5"});
skillArray.push({level: "5", skill: "Java"});
skillArray.push({level: "9", skill: "JavaScript"});
skillArray.push({level: "4", skill: "Linux"});
skillArray.push({level: "2", skill: "Machine Learning"});
skillArray.push({level: "6", skill: "MySQL"});
skillArray.push({level: "4", skill: ".Net"});
skillArray.push({level: "5", skill: "PHP"});
skillArray.push({level: "6", skill: "Python"});
skillArray.push({level: "10", skill: ">Visual Basic"});
skillArray.push({level: "5", skill: "Visual Studio"}); 

function getSkillMarkup(skillObject) {
	return "<span class='skill subtext' level='" + skillObject.level + "'>" + skillObject.skill + "</span>";
}

function getShowcaseBodyMarkup() {
	var markup = "<div class='showcaseImage'><img src='images/biopic.png'/></div><div class='showcaseText'>";
	markup += bioText;
	markup += "</div><div class='skills'>";
	for (var i = 0; i < skillArray.length; i++) {
		markup += getSkillMarkup(skillArray[i]);
	};
	markup += "</div></div>";
	return markup;
}

function getAboutMarkup() {
	var markup = "<div class='subMenu'><h2>About Me</h2></div><div class='showcase'><div class='flexRow'><aside class='sidePanel'></aside><div class='showcaseHolder'><div class='showcasePane'><div class='showcaseTop'></div><div class='showcaseBody'>";
	markup += getShowcaseBodyMarkup();
	markup += "</div></div></div><aside class='sidePanel'></aside></div></div></div><aside class='sidePanel'></aside></div>";
	return markup;
}
