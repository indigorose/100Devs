// Following thejsway - chapter 9 on github.

// Create a dog class

// TODO: define the Dog class here

class Dog {
	constructor(name, species, size) {
		this.name = name;
		this.species = species;
		this.size = size;
	}
	bark() {
		if (this.size > 65) {
			return 'Grrr! Grrr!';
		} else {
			return 'Woof! Woof!';
		}
	}
}

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Character {
	constructor(name, health, strength, gold, key) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.xp = 0;
		this.gold = gold;
		this.key = key;
		// XP is always zero for new characters
	}
	// Attack a target
	attack(target) {
		if (this.health > 0) {
			const damage = this.strength;
			console.log(
				`${this.name} attacks ${target.name} and causes ${damage} damage points`
			);
			target.health -= damage;
			if (target.health > 0) {
				console.log(
					`${target.name} has ${target.health} health points left`
				);
			} else {
				target.health = 0;
				const bonusXP = 10;
				const bonusGold = 10;
				const bonusKey = 1;
				console.log(
					`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold and ${bonusKey} key(s)`
				);
				this.xp += bonusXP;
				this.gold += bonusGold;
				this.key += bonusKey;
			}
		} else {
			console.log(`${this.name} can’t attack (they've been eliminated)`);
		}
	}
	// Return the character description
	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
	}
}

class Monster {
	constructor(name, strength, health) {
		this.name = name;
		this.strength = strength;
		this.health = health;
	}
	// Attack a target
	attack(target) {
		if (this.health > 0) {
			const damage = this.strength;
			console.log(
				`${this.name} attacks ${target.name} and causes ${damage} damage points`
			);
			target.health -= damage;
			if (target.health > 0) {
				console.log(
					`${target.name} has ${target.health} health points left`
				);
			} else {
				target.health = 0;
				const bonusXP = 10;
				console.log(
					`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
				);
				this.xp += bonusXP;

			}
		} else {
			console.log(`${this.name} can’t attack (they've been eliminated)`);
		}
	}
	// Return the character description
	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
	}
}

console.log('Welcome to the adventure! Here are our heroes:');

const aurora = new Character('Aurora', 150, 25, 10, 1);
console.log(aurora.describe())
// console.log(
// 	`${aurora.name} has ${aurora.health} health points, ${aurora.strength} strength points and ${aurora.xp} XP points, ${aurora.gold} gold and ${aurora.key} keys(s)`
// );

const glacius = new Character('Glacius', 130, 30, 10, 1);
console.log(glacius.describe())
// console.log(
// 	`${glacius.name} has ${glacius.health} health points, ${glacius.strength} strength points and ${glacius.xp} XP points, ${glacius.gold} gold and ${glacius.key} keys(s)`
// );

const spike = new Monster('Spike', 20, 40);
console.log(`A wild monster has appeared: it's name is ${spike.name}`);
spike.attack(aurora);
spike.attack(glacius);
aurora.attack(spike);
glacius.attack(spike);
console.log(aurora.describe())
console.log(glacius.describe());

class BankAccount {
    constructor(name, credit, balance){
        this.name = name;
        this.balance = 0;
        this.credit = credit;
    }
    balanceCheck(target){
        return this.balance += target
    }

    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const sean = new BankAccount('Sean')
sean.balanceCheck(1000)
console.log(sean.describe());

const brad = new BankAccount('Brad');
brad.balanceCheck(1000);
console.log(brad.describe());

const georges = new BankAccount('Georges');
georges.balanceCheck(1000);
console.log(georges.describe());