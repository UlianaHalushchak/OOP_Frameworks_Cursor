function Cat(name) {
	this._superClass = Animal.prototype;
	Animal.call(this, name);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Cat.prototype.born = function() {
// 	console.log('I am ' + this.name + ' cat');
// 	this._superClass.born.call(this);
// };
