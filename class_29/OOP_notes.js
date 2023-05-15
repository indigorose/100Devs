/* 4 pillars of OOP 
    1 - Encapsulation
    2 - Abstraction
    3 - Inheritance
    4 - Polymorphism */

// Object Literals
// const circle = {
//     These are properties
//     radius : 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw is a method
//     draw: function(){
//         console.log('draw')
//     }
// }

// access using dot notation

// circle.draw();

// The issue with literal objects is that if you wish to create another object you run into duplication/wet not dry code.

// We can create a constructor function which acts like the first or initial stamp to create.

// Factory function
// function createCircle (radius){
//     return {
// 		radius,
// 		draw: function () {
// 			console.log('draw');
// 		},
// 	};
// }

// const circle = createCircle(1)
// circle.draw()

// Constructors

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// }
// This function is an object and when we call the following to the console, we find the following:
// console.log(Circle.name)
// returns circle
// console.log(Circle.length)
// returns the number of parameters - 1 which is radius.

// Circle.call({}, 1);
// Circle.apply({}, 1);

// const another = new Circle(1)

// Value vs Reference types

// let x = {value: 10};
// let y = x;

// x.value = 20
// console.log(x)
// console.log(y)

// when we store values as objects, we copy the information unlike literal values
// Therefore Primative are copied by their value, Objects are copied by their reference.

// let number = 10;

// function increase(number) {
//     number++;
// }

// increase(number)
// console.log(number)

/* In the above example, 10 is printed to the console as whilst we are asking for an increase with the function, the increase is local only to function. It is an independent change */

// The reference method below

// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj)
// console.log(obj)

//     function Circle(radius) {
//         this.radius = radius;
//         this.draw = function (){
//             console.log('draw');
//         }
//     }

//     const circle = new Circle(10)
// Add a new property using dot notation
// circle.location = { x: 1};
// bracket notation
// circle['location'] = {x: 1};

// const propertyName = 'center location'
// circle[propertyName] = {x: 1};

// delete circle.location
// allows you to remove information.

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)
// for (let key in circle){
//     if (typeof circle[key] !== 'function')
//     {console.log(key, circle[key])}
// }

// const keys = Object.keys(circle)
// console.log(keys)

// if('radius' in circle)
//     console.log('Circle has a radius')

// Abstraction - hide the details show the essentials
// In this example, we are hiding the defaultLocation property and function computeOptimumLocation

// Private properties

// function Circle(radius) {
// 	let color = 'red';
// 	// This is a local variable

// 	this.radius = radius;
// 	// let rather than this allows you to make private members of the object.
// 	let defaultLocation = { x: 0, y: 0 };
// 	// let computeOptimumLocation = function(factor){
// 	//     // ...
// 	// }
// 	// if we want to see a private property
// 	this.getDefaultLocation = function () {
// 		return defaultLocation;
// 	};
// 	this.draw = function () {
// 		// computeOptimumLocation(0.1)
// 		console.log('draw');
// 	};
// 	Object.defineProperty(this, 'defaultLocation', {
// 		get: function () {
// 			return defaultLocation;
// 		},
// 		set: function (value) {
// 			if (!value.x || !value.y) throw new Error('Invalid location');
// 			defaultLocation = value;
// 		},
// 	});
// }

// const circle = new Circle(10);


class Stopwatch {
    constructor(duration, reset, start, stop) {
        this.duration = 0;
        this.reset = 0;
        this.start = 0;

    }
}