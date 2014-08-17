var softwareArray = [];
//Software project 1
softwareArray[0] = new projectContent();
softwareArray[0].setShortName("ML Forecaster");
softwareArray[0].setLongName("Machine Learning Forecaster");
softwareArray[0].setTechnologies("C++, SQL, Machine Learning");
softwareArray[0].setDescription("<p>The Machine Learning Forecaster uses all available climatological weather observations, for a chosen location, to feed into a mutli-layered neural network. The purpose of the ML Forecaster is to provide a fast and accurate weather forecast, based on the current conditions.</p>\
            <p>An alternative method is made available, in the form of a more traditional database solution. This method performs a simple statistical analysis, averaging the most likely outcome. However, this version is limited to no more than 10 years of historical observations.</p>");
softwareArray[0].setPictures(["climo.png"]);
//Software project 2
softwareArray[1] = new projectContent();
softwareArray[1].setShortName("Training DB");
softwareArray[1].setLongName("Battlefield Weather Training Database");
softwareArray[1].setTechnologies("VBA, SQL, ADO, Access, Excel");
softwareArray[1].setDescription("<p>The Battlefield Weather Training Database was created to address the inefficiencies of the standard practices in place. The database was built to be as easy to operate and adaptive as possible. Due to Access' shortcomings, most of the database functionality had to be custom coded.</p>\
			<p>The database currently tracks over 300 training items for more then 250 individuals. It has the ability to quickly identify individual training deficiencies, identify members that have not met training standards. Reports can be in a basic list format, or exported to a color-coded excel table.</p>\
			<p>I was awarded the Air Force Achievement Medal for the impact the database had to training and operations</p>");
softwareArray[1].setPictures(["DB1.png","DB2.png","DB3.png"]);
//Software project 3
softwareArray[2] = new projectContent();
softwareArray[2].setShortName("GA Playground");
softwareArray[2].setLongName("Genetic Algorithm Playground");
softwareArray[2].setTechnologies("Python, Pygame, Genetic Algorithms");
softwareArray[2].setDescription("<p>The Genetic Algorithm Playground started as a simple test to try out Genetic Algorithms. Much like the algorithms themselves, the playground evolved into more and more complex creatures.</p>\
			<p>Each creature starts out with random values in each of its attributes. The attributes include: sight distance, speed, agility, and the desire to either flock or avoid others. Each generation, the individuals that collected the most food were selected to reproduce. Their genes are then randomly split and recombines to create a new generation.</p>\
			<p>As a personal note, it is amazing to watch how quickly the strongest traits drown out the weakest. The desire to flock or avoid others seems to alternate almost every time the program is run.</p>");
softwareArray[2].setPictures(["GA1.png","GA2.png","GA3.png"]);
//Software project 4
softwareArray[3] = new projectContent();
softwareArray[3].setShortName("Excel CMS");
softwareArray[3].setLongName("Excel-based CMS created for ImmerWeb");
softwareArray[3].setTechnologies("VBA, HTML5, JavaScript");
softwareArray[3].setDescription("<p>This content management system was created to allow Battlefield Weather Instructors to be able to manage and update the content in the 18th Weather Squadron Immersion Website (see web projects).</p>\
			<p>The interactive portion of the CMS is an excel form with a number of custom controls. This allows for the instructor to load a scenario, copy all the model and analysis image files to their appropriate locations, then automatically insert the appropriate HTML5 and JavaScript.</p>\
			<p>Additional controls include 3 forms of satellite imagery, customizable surface weather observations, and the ability to save and load settings.</p>");
softwareArray[3].setPictures(["ExcelCMS1.png","ExcelCMS2.png","ExcelCMS3.png"]);
//Software project 5
softwareArray[4] = new projectContent();
softwareArray[4].setShortName("Light Data");
softwareArray[4].setLongName("Solar and Lunar Light Data Impacts");
softwareArray[4].setTechnologies("VBA, Excel");
softwareArray[4].setDescription("<p>The Solar and Lunar Light Data Impacts generator was created to eliminate the need for unfamiliar external software, tedious copying of files, and hours worth of wasted time.</p>\
			<p>The algorithmsbehind the implementation were adapted from the work of <a href='http://www.willbell.com/math/mc1.htm' target='blank'>Jean Meeus</a>. Due to the limitations of VBA, a large portion of the algorithms' processes had to be adapted to VBA's capabilities.</p>\
			<p>After optimaization, what used to take an hour, per location, was reduced to less than 1 minute.</p>");
softwareArray[4].setPictures(["LD1.png","LD2.png"]);
//Software project 5
softwareArray[5] = new projectContent();
softwareArray[5].setShortName("Jupiter");
softwareArray[5].setLongName("Jupiter, Trie-based Search Engine");
softwareArray[5].setTechnologies("Java");
softwareArray[5].setDescription("<p>Jupiter is a document search engine inspired by a college assignment to design a search engine. For this implementation, I wanted to try out something different.</p>\
			<p>The main difference between Jupiter and a standard search engine is the way indices are stored. Instead of storing keywords in a hash table, I opted for a Trie data structure. This is due to a Trie's ability to store the keywords more compactly, while not having to worry about collisions.</p>\
			<p>This was a fantastic opportunity to use a great data structure!</p>");
softwareArray[5].setPictures(["Jupiter1.png","Jupiter2.png","Jupiter3.png","Jupiter4.png"]);

var webArray = [];
//web project 1
webArray[0] = new projectContent();
webArray[0].setShortName("OMW");
webArray[0].setLongName("Open Mic Web");
webArray[0].setTechnologies("PHP, MySQL, Apache, HTML5, CSS3, JavaScript, JQuery");
webArray[0].setDescription("<p>Open Mic Web is a music collaboration website with social elements. Users are able to upload tracks and collaborate with other users by linking their tracks together. Normal social elements like profiles, commenting, favorites, and voting were implemented.</p>\
            <p>I developed this site from scratch with a PHP/MySQL backend, while the frontend took advantage of the latest HTML5 and CSS3 features. Much of the content and functionality relied heavily on JQuery and AJAX to dynamically load and update content.</p>\
            <p>Unfortunately, I did not have the funds to bring OMW further than a self-hosted Alpha.</p>");
webArray[0].setPictures(["omw1.png","omw2.png","omw3.png","omw4.png"]);
//web project 2
webArray[1] = new projectContent();
webArray[1].setShortName("ImmerWeb");
webArray[1].setLongName("18th Weather Squadron Immersion Website");
webArray[1].setTechnologies("HTML5, CSS3, JavaScript");
webArray[1].setDescription("<p>The Weather Immersion Website (ImmerWeb) was created to train Battlefield Weather personnel to become proficient at forecasting for any location in the world. The ImmerWeb allows Instructors to use canned weather data, in order to create a more challenging environment.</p>\
            <p>Because of the restrictive Department of Defense environment, all non-standard functionality had to be custom coded with JavaScript. In order to allow non-programmer instructors the ability to change the content of the website, I wrote a custom CMS in Excel (see Excel CMS).</p>\
            <p class='note'>ImmerWeb is currently being upgraded to a PHP-based site that will be run on a newly aquired small LAN.</p>");
webArray[1].setPictures(["Immer1.png","Immer2.png","Immer3.png"]);
//web project 3
webArray[2] = new projectContent();
webArray[2].setShortName("BCFFA");
webArray[2].setLongName("Burke County Friends For Animals");
webArray[2].setTechnologies("HTML, CSS, JavaScript");
webArray[2].setDescription("<p>The Burke County Friends For Animals (BCFFA) is one of the largest animal rescues in North Carolina. I volunteered to give the site a much needed update, bringing them into the 21st century.</p>\
            <p>This site needed to be easily maintainable, as they would take over responsibility for updating site content. Luckily, their volunteer had a basic knowledge of HTML and was able to edit simple code. Under this circumstance, backend languages were out.</p>\
            <p class='note'>The site I created for them was their face for nearly 5 years before they decided to move to another design.</p>");
webArray[2].setPictures(["BCFFA1.jpg","BCFFA2.jpg","BCFFA3.jpg"]);
//web project 4
webArray[3] = new projectContent();
webArray[3].setShortName("This");
webArray[3].setLongName("This Site!");
webArray[3].setTechnologies("HTML5, CSS3, JavaScript, JQuery");
webArray[3].setDescription("<p>This version of my portfolio site was a test of how I can mimmick the functionality of a fully hosted multi-page website, while being restricted to one static HTMl page.</p>\
            <p>In order to mock the behaviour of a multi-page website, pre-written JavaScript content objects are dynamically loaded at multiple levels. The site relies on CSS3 and JQuery to create a great interactive experience.</p>\
            <p>A true hosted variation may be in order. However, I would substitute true AJAX calls and multi-page layouts, instead of a JavaScript OOP implementation.</p>");
webArray[3].setPictures(["Immer1.png","Immer2.png","Immer3.png"]); //update this!

var softwareSwitcher = new projectSwitcher();
var currImgArray = [];
softwareSwitcher.setProjectArray(softwareArray);
softwareSwitcher.switchProject(0);

var webSwitcher = new projectSwitcher();
webSwitcher.setProjectArray(webArray);

var workSwitcher = new contentSwitcher();
workSwitcher.init();
workSwitcher.addContent(softwareSwitcher);
workSwitcher.addContent(webSwitcher);

function imageSwitcher() {
	var currImage = 0;
	$('.showcaseImage').attr('src', 'images/' + currImgArray[currImage]);
	setInterval(function() {
	   currImage++;  
	   if (currImage > currImgArray.length-1) { currImage = 0;} 
	   $('.showcaseImage').attr('src', 'images/' + currImgArray[currImage]);
	},5000);
}
imageSwitcher();

function switchProject(projectNum) {
	slideContentDown('showcasePane');
	setTimeout(function () {
		workSwitcher.switchProject(projectNum);
		currImgArray = workSwitcher.getImgArray();
	}, 500);	
}

function switchContent(contentNum) {
	slideContentDown('showcase');
	setTimeout(function () {
		workSwitcher.changeContent(contentNum);
	}, 1000);	
}

function projectContent() {
	//this class will be the basis for our project-specific content objects
	var shortName;
	var longName;
	var description;
	var pictures;
	var technologies;
	//declare our sets
	this.setShortName = function(newValue)    {this.shortName = newValue;}
	this.setLongName = function(newValue)     {this.longName = newValue;}
	this.setTechnologies = function(newValue) {this.technologies = newValue;}
	this.setDescription = function(newValue)  {this.description = newValue;}
	this.setPictures = function(newValue)     {this.pictures = newValue;}
	//declare our gets
	this.getShortName = function()     {return this.shortName;}
	this.getLongName =  function()     {return this.longName;}
	this.getTechnologies =  function() {return this.technologies;}
	this.getDescription =  function()  {return this.description;}
	this.getPictures =  function()     {return this.pictures;}
}

function projectSwitcher() {
	//this class will be responsible for switching out the current project for the next selected one
	var currentProject;
	var projectArray;
	var imgArray;

	this.setProjectArray = function (newProjectArray) {this.projectArray = newProjectArray;}

	this.switchProject = function switchProject(newProjectNumber) {
		if (newProjectNumber !== this.currentProject) {
			//if it isn't the same project, then we will switch it up
			this.currentProject = newProjectNumber;
			this.imgArray = this.projectArray[this.currentProject].getPictures();
			currImgArray = this.imgArray;
			$('.showcasePane').html(this.getProjectCode());
		}
	}

	this.getImgArray = function () {return this.imgArray;}

	this.getProjectCode = function getProjectCode() {
		//this function simply 
		return "<div class='showcaseTop'>\
          <span class='showcasePaneName'><h4>" + this.projectArray[this.currentProject].getLongName() + "</h4></span>\
          <span class='showcasePanelTechnologies'>" + this.projectArray[this.currentProject].getTechnologies() + "</span>\
        </div>\
        <div class='showcaseBody'>\
          <div ><img class='showcaseImage' src='images/" + this.imgArray[0] + "' onclick='imgPopout(this)'/></div>\
          <div class='showcaseText'>" + this.projectArray[this.currentProject].getDescription() + "</div>\
        </div>"
	}

	this.getProjectTile = function getProjectTile(tileNum) {
		var selected = "";
		if (tileNum == 0) {selected = " selected";}
		return "<div class='projectTile" + selected + "' projectnumber='" + tileNum + "' style='background: url(\"images/" + this.projectArray[tileNum].getPictures()[0] + "\") center center'>\
          <span class='projectTileName'>" + this.projectArray[tileNum].getShortName() + "</span></div>";
	}

	this.getAllTiles = function getAllTiles() {
		var leftTiles = [], rightTiles = [], compiledHTML = "<div class='slideBar'>";
		for (var i = 0; i <= this.projectArray.length - 1; i++) {
			if (leftTiles.length > rightTiles.length) { //balance out our left and right side as much as possible
				rightTiles.push(this.getProjectTile(i)); //add the tile HTMl onto the right side
			} else {
				leftTiles.push(this.getProjectTile(i));
			}
		};
		compiledHTML += "<div class='slideBarLeft'>";
		for (var i = 0; i < leftTiles.length; i++) {
			compiledHTML += leftTiles[i];
		};
		compiledHTML += "</div><div class='slideBarRight'>";
		for (var i = 0; i < rightTiles.length; i++) {
			compiledHTML += rightTiles[i];
		};
		compiledHTML += "</div></div>";
		return compiledHTML;
	}
}

function contentSwitcher() {
	var currentContent;
	var contentArray;

	this.init = function () {
		this.currentContent = 0;
		this.contentArray = [];
	}

	this.addContent = function addContent(newContent) {
		this.contentArray.push(newContent);
	}

	this.switchProject = function switchProject(nextProject) {
		this.contentArray[this.currentContent].switchProject(nextProject);
	}

	this.getImgArray = function getImgArray() {
		return this.contentArray[this.currentContent].getImgArray();
	}

	this.changeContent = function changeContent(nextContent) {
		if (this.currentContent != nextContent) {
			this.currentContent = nextContent;
			this.contentArray[this.currentContent].switchProject(0);
			$(".showcase").html(this.drawContent());
			$('.projectTile').click(function() {
				var newProjectNum = $(this).attr("projectnumber");
				$('.projectTile.selected').removeClass('selected');
				switchProject(newProjectNum);
				$(this).addClass('selected');
			});	
		}
	}

	this.drawContent = function drawContent() {
		var compiledHTML = "";
		compiledHTML += this.contentArray[this.currentContent].getAllTiles();
		compiledHTML += "<div class='flexRow'><aside class='sidePanel'></aside><div class='showcaseHolder'><div class='showcasePane'>";
    	compiledHTML += this.contentArray[this.currentContent].getProjectCode();
    	compiledHTML += "</div></div><aside class='sidePanel'></aside></div></div>";
    	return compiledHTML;
	}
}
