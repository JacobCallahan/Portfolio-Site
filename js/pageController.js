//this file will host the main controller for the portfolio website
//I am using this method to simpulate a full website, while still remaining on a single page
var portfolioPageController = new pageController();
portfolioPageController._init();

function switchPage(newPage) {
	portfolioPageController.switchPage(newPage);
}

function pageController() {
	//this is the main page controller class
	//we will define our control variables, as well as carry out our controlling logic
	var currentPage;
	//because the work page is more complex, we implemented a separate controller class
	var workController; //take the workSwitcher object as our workController

	this._init = function _init() {
		this.currentPage = "0";
		this.workController = workSwitcher;
	}

	this.switchPage = function switchPage(newPage) {
		if (newPage != currentPage) {
			//first update our current page variable
			this.currentPage = newPage;
			//then make the switch
			$('.mainContent').html(this.getPageMarkup());
			//remove the selected modifier from the previous page (we added it to the new one in the previous call)
			$('.menuItem.selected').removeClass('selected');
			//finally, we will refresh our funcitonality
			this.refreshFunctionality();
		} //if it is the same page, then we don't need to worry about it
	}

	this.getPageMarkup = function getPageMarkup() {
		//this function will determine which page we will load
		switch (this.currentPage) {
			case "0":
				//this is our about page
				return getAboutMarkup();
				break;
			case "1":
				//this is our work page
				//we have to do a little extra work to setup the markup for this page
				var preMarkup = '<div class="subMenu"><h2>Selected Works</h2><span class="subMenu selected hoverText" id="Software" contentnumber="0">\
				                 Software</span> &middot;<span class="subMenu hoverText" id="WebDev" contentnumber="1">Web Dev</span></div><div class="showcase">';
				var postMarkup = "</div>";
				return preMarkup + this.workController.drawContent() + postMarkup;
				break;
			case "2":
				//this is our contact page
				return getContactMarkup();
				break;
			default:				
				//the default will be the about page
				return getAboutMarkup();
				break;
		}
	}
	this.refreshFunctionality = function refreshFunctionality() {
		//simply refresh our jquery functionality
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
		$('.menuItem.hoverText').click(function() {
			var newPageNum = $(this).attr("pagenumber");
			switchPage(newPageNum);
			$(this).addClass('selected');
		});
		$('.formSubmit').click(function(e) {
			e.preventDefault();
			$('.formSubmit').after(generateEmailLink()).slideDown();
		});
	}
}