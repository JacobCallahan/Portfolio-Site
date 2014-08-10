
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
	this.setDescription = function(newValue)  {this.description = newValue;}
	this.setPictures = function(newValue)     {this.pictures = newValue;}
	this.setTechnologies = function(newValue) {this.technologies = newValue;}
	//declare our gets
	this.getShortName = function()     {return this.shortName;}
	this.getLongName =  function()     {return this.longName;}
	this.getDescription =  function()  {return this.description;}
	this.getPictures =  function()     {return this.pictures;}
	this.getTechnologies =  function() {return this.technologies;}
}
