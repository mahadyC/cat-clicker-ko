
var initialCats = [
    		{
                clickCount: 0,
                name: "mini",
                image: "img/22252709_010df3379e_z.jpg",
                nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
            },
            {
            	clickCount: 0,
                name: "bini",
                image: "img/434164568_fea0ad4013_z.jpg",
                nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
            },
            {
                clickCount: 0,
                name: "sini",
                image: "img/1413379559_412a540d29_z.jpg",
                nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
            },
            {
                clickCount: 0,
                name: "gini",
                image: "img/4154543904_6e2428c421_z.jpg",
                nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
            },
            {
                clickCount: 0,
                name: "yini",
                image: "img/9648464288_2516b35537_z.jpg",
                nickName: [{name: "Tammy"},{name: "Meow"}, {name: "Cuddly"}, {name: "Glu"}]
            }
        ];

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

	var self = this;
	
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	


};

ko.applyBindings(new ViewModel());