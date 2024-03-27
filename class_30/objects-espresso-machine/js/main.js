//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

// class EspressoMachine{
// 	constructor(water, milk, coffee, cost) {
// 		this.water = water;
// 		this.milk = milk;
// 		this.coffee = coffee;
// 		this.cost = cost;
// 	}
// 	order() {
// 		console.log('Can I take your order?');
// 	}
// 	typeMilk() {
// 		console.log('What type of milk?');
// 	}
// 	change(change) {
// 		return change - this.cost;
// 	}
// }

// Lesson version

class EspressoMachine {
	constructor(color, make, model, price) {
		this.color = color;
		this.make = make;
		this.model = model;
		this.price = price;
	}
	turnOn() {
		console.log('Good day, I am now on!');
	}
	steam() {
		console.log('50% off sale today!!');
	}
	brew() {
		console.log('Good stuff coming your way.');
	}
}

// Create an object

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400);
