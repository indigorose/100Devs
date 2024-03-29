// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
/* The contractor class can be classed as the parent class and shows encapsulation as it 
holds both variables and methods. 
Abstraction is also displayed in the parent class as we are hiding the name and role and using a function
to call them. We must always use a function in these circumstances to avoid unnecessary alterations. 
*/
class Contractor {
	constructor(name, role) {
		this._name = name;
		this._role = role;
	}
	// Abstratction
	get name() {
		return this._name;
	}
	get role() {
		return this._role;
	}
	sayHello() {
		console.log(`Hello, I am on the ${this._role} team at #100Devs!`);
	}
}
/* The front class displays inheritance by using the "extend" functionality from the contractor class. 
To inherit the methods, we use the "super" keyword then the variables.*/
class Front extends Contractor {
	constructor(name, role, tech) {
		super(name, role);
		this._tech = tech;
	}
	get tech() {
		return this._tech;
	}
	sayHello() {
		console.log(
			`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
		);
	}
}
class Back extends Contractor {
	constructor(name, role, tech) {
		super(name, role);
		this._tech = tech;
	}
	get tech() {
		return this._tech;
	}
	sayHello() {
		console.log(
			`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
		);
	}
}
let bob = new Contractor('Bob', 'Front-end');
let simba = new Front('Simba', 'Front-end', 'React');
let machi = new Back('The Machine', 'Back-end', 'Node');

let agency = [bob, simba, machi];

// This is an example of polymorphism as we can call all the methods, in one and still have the uniqueness of their classes

for (person of agency) {
	person.sayHello();
}
