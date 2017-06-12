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
	
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	


};

ko.applyBindings(new ViewModel());