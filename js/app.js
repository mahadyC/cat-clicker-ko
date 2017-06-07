var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("fluffy");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
	this.nickName = ko.observableArray({
		names:["Tammy", "Chuci", "Mew", "Arr"]
	});

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());