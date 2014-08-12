var softwareArray = [];
//Software project 1
softwareArray[0] = new projectContent();
softwareArray[0].setShortName("ML Forecaster");
softwareArray[0].setLongName("Machine Learning Forecaster");
softwareArray[0].setTechnologies("C++, SQL, Machine Learning");
softwareArray[0].setDescription("<p>The Machine Learning Forecaster uses all available climatological weather observations, for a chosen location, to feed into a mutli-layered neural network. The purpose of the ML Forecaster is to provide a fast and accurate weather forecast, based on the current conditions.</p>
            <p>An alternative method is made available, in the form of a more traditional database solution. This method performs a simple statistical analysis, averaging the most likely outcome. However, this version is limited to no more than 10 years of historical observations.</p>");
softwareArray[0].setPictures(["climo.png"]);
//Software project 2
softwareArray[1] = new projectContent();
softwareArray[1].setShortName("Training DB");
softwareArray[1].setLongName("Battlefield Weather Training Database");
softwareArray[1].setTechnologies("VBA, SQL, ADO, Access, Excel");
softwareArray[1].setDescription("<p>The Battlefield Weather Training Database was created to address the inefficiencies of the standard practices in place. The database was built to be as easy to operate and adaptive as possible. Due to Access' shortcomings, most of the database functionality had to be custom coded.</p>
			<p>The database currently tracks over 300 training items for more then 250 individuals. It has the ability to quickly identify individual training deficiencies, identify members that have not met training standards. Reports can be in a basic list format, or exported to a color-coded excel table.</p>
			<p>I was awarded the Air Force Achievement Medal for the impact the database had to training and operations</p>");
softwareArray[1].setPictures(["DB1.png","DB2.png","DB3.png"]);
//Software project 3
softwareArray[2] = new projectContent();
softwareArray[2].setShortName("GA Playground");
softwareArray[2].setLongName("Genetic Algorithm Playground");
softwareArray[2].setTechnologies("Python, Pygame, Genetic Algorithms");
softwareArray[2].setDescription("<p>The Genetic Algorithm Playground started as a simple test to try out Genetic Algorithms. Much like the algorithms themselves, the playground evolved into more and more complex creatures.</p>
			<p>Each creature starts out with random values in each of its attributes. The attributes include: sight distance, speed, agility, and the desire to either flock or avoid others. Each generation, the individuals that collected the most food were selected to reproduce. Their genes are then randomly split and recombines to create a new generation.</p>
			<p>As a personal note, it is amazing to watch how quickly the strongest traits drown out the weakest. The desire to flock or avoid others seems to alternate almost every time the program is run.</p>");
softwareArray[2].setPictures(["GA1.png","GA2.png","GA3.png"]);
//Software project 4
softwareArray[3] = new projectContent();
softwareArray[3].setShortName("Excel CMS");
softwareArray[3].setLongName("Excel-based CMS created for ImmerWeb");
softwareArray[3].setTechnologies("VBA, HTML5, JavaScript");
softwareArray[3].setDescription("<p>This content management system was created to allow Battlefield Weather Instructors to be able to manage and update the content in the 18th Weather Squadron Immersion Website (see web projects).</p>
			<p>The interactive portion of the CMS is an excel form with a number of custom controls. This allows for the instructor to load a scenario, copy all the model and analysis image files to their appropriate locations, then automatically insert the appropriate HTML5 and JavaScript.</p>
			<p>Additional controls include 3 forms of satellite imagery, customizable surface weather observations, and the ability to save and load settings.</p>");
softwareArray[3].setPictures(["ExcelCMS1.png","ExcelCMS2.png","ExcelCMS3.png"]);
//Software project 5
softwareArray[4] = new projectContent();
softwareArray[4].setShortName("Light Data");
softwareArray[4].setLongName("Solar and Lunar Light Data Impacts");
softwareArray[4].setTechnologies("VBA, Excel");
softwareArray[4].setDescription("<p>The Solar and Lunar Light Data Impacts generator was created to eliminate the need for unfamiliar external software, tedious copying of files, and hours worth of wasted time.</p>
			<p>The algorithmsbehind the implementation were adapted from the work of <a href='http://www.willbell.com/math/mc1.htm' target='blank'>Jean Meeus</a>. Due to the limitations of VBA, a large portion of the algorithms' processes had to be adapted to VBA's capabilities.</p>
			<p>After optimaization, what used to take an hour, per location, was reduced to less than 1 minute.</p>");
softwareArray[4].setPictures(["LD1.png","LD2.png"]);

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
