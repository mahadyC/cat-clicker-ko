var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("fluffy");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
};

ko.applyBindings(new ViewModel());