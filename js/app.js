var Cat = function(data){
	
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickName = ko.observableArray(data.nickName);

	this.catLevel = ko.computed(function(){
		if(this.clickCount() < 10){
			return "Newborn";
		}else if(this.clickCount() >= 10 && this.clickCount() < 20){
			return "Infant";
		}else {
			return "Teen";
		}
	}, this);
};


var ViewModel = function(){
	
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: "fluffy",
		imgSrc: "img/22252709_010df3379e_z.jpg",
		nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
	}) );

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	


};

ko.applyBindings(new ViewModel());