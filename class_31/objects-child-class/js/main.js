//Create an a class and extend it - Can be anything you would like it to be!

class Console {
	constructor(name) {
		this.name = name;
	}
}

class Xbox extends Console {
	constructor(name, controllers) {
		super(name);
		this.controllers = controllers;
	}
	speak() {
		console.log(`I'm a ${this.name}`);
	}
}

let seriesX = new Xbox('x', 4);
