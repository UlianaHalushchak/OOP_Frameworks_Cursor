function Animal(name) {
	this.DEFAULT_FOOD_AMOUNT = 3;
	this.name = name;
	this.food = 0;

	this.born();
};

Animal.prototype.born = function() {

	var sayHello = function () {
		console.log('Hello');
	};

	console.log('I\'m animal. My name is ' + this.name);
	sayHello();
};

Animal.prototype.walk = function() {
	return this.name + ' is walking';
};

Animal.prototype.isHungry = function() {
	return this.food >= this.DEFAULT_FOOD_AMOUNT;
};
