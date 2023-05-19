//  Class 30 and 31 - OOP but it actually makes sense, Inheritance and polymorphism.

// Espresso Machine
// class EspressoMachine {
//     constructor(beans, water, milk, sugar){
//         this.beans = beans;
//         this.water = water;
//         this.milk = milk;
//         this.sugar = sugar;

//     }
//     grind() {
//         if (this.beans = 'ground'){
//             return 'add to machine'
//         }else {
//             return 'ground them beans first'
//         }
//     }
//     hotWater (){
//         if (this.water = 'hot'){
//             return 'fresh espresso coming up'
//         } else {
//             return 'ooh, you want a cold brew'
//         }
//     }
//     milkSugar(){
//         if(this.milk == 'yes' && this.sugar == 'yes'){
//             return 'add milk and sugar'
//         } else {
//             return 'a purist in our midsts'
//         }
//     }

// This is encapsulation - placing common attributes of objects into a class/constructor/function. This is the beginning of object orientated programming!
class EspressoMachine {
	constructor(color, make, model, price) {
		this.color = color;
		this.make = make;
		this.model = model;
		this.price = price;
	}
	turnOn() {
		console.log('Good day, I am ready to go');
	}
	steam() {
		console.log("I like milk, from cow to oat, I'll make it froth");
	}
	brew() {
		console.log('Give me the beans!!!');
	}
}

let gaggia = new EspressoMachine('red', 'gaggia', 'Classic Pro', 500);

function AgencyContractor(hourlyRate, hours, taxRate) {
	this.hours = hours;
	this.taxRate = taxRate;
	// let variables are not bound to the object and cannot be called with dot notation. -  hence abstraction!!!
	let rate = hourlyRate;
	let calculateProfit = function () {
		return rate * this.hours * (1 - this.taxRate);
	};
	this.invoiceClient = function () {
		return `Your invoice total is ${rate * this.hours}`;
	};
}

let karen = new AgencyContractor(250, 160, 0.35);
// console.log (karen.invoiceClient())

// class Animal {
//     constructor(name){
//         this._name = name;
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }

// If you want to have different kind of animal - we extend the first class
// This is inheritance!!

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name)
//         this.breed = breed
//     }
// }

// Be aware when extending and established extension, we must combine all the object variables we wish call in the next. Only one 'super' at a time.
// class Cat extends Dog {
//     constructor(name, breed, sound){
//         super(name, breed)
//         this.sound = sound
//     }
// we can also supersede the og function
//     speak(){
//         console.log(`${this.sound}`)
//     }
// }

// let simba = new Dog('Simba', 'Shepard')
// let moggy = new Cat('Moggy', 'Silver Tabby', 'meow')

// console.log(simba.name)
// simba.speak()
// console.log(moggy.name)
// console.log(moggy.breed)
// moggy.speak()

// Inheritance - Make a class from another class for a hierarchy of classes that share a set of properties and methods

// We must be aware that we can change the properties of our classes.
// this.??? can be changed as opposed to let.

// We can stop this with "_"to the property - go back to the parent class. This is a private property.

// A new catch though - we can still change on the underscore. It is more a conventional symbol/syntax to say DO NOT TOUCH THIS PROPERTY!!!!

// The 'get' function allows us to call these underscored properties without having to type the underscore - c'mon we are likely to forget an underscore when writing further down from the class.

class Animal {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	speak() {
		console.log(`${this._name} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
	speak() {
		// It's ok to use another super here.
		super.speak();
		console.log(`${this.name} barks`);
	}
}

class Cat extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
	speak() {
		// It's ok to use another super here.
		super.speak();
		console.log(`${this.name} meows`);
	}
}

class Cow extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
}

let simba = new Dog('Simba', 'Shepard');
let mochi = new Cat('Mochi', 'Silver Tabby');
let lassie = new Dog('Lassie', 'Australian Sheepdog');
let betty = new Cow('Betty', 'Frisian');

// let farm = [simba, mochi, lassie, betty];

// for (a of farm) {
// 	a.speak();
// }

// Code written to use an interface automatically knows how to work with any number of different objects that provide the interface.

// Sibling descendants of a base class will all have the same interface but varying implementations

// When you are not sure of the object type at runtime and the most specific method is called.

// Therefore the behaviour of the method called may differ, depending ont he objects type at runtime.

// Polymorphism provides a way to perform a single action in different forms and the ability to call the same method on different objects.

// Look at Anki notes