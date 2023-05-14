// Javascript Revision

// Variables

let candy1 = 11;
let candy2 = 6;
let candy3 = 6;

let totalCandies = candy1 + candy2 + candy3;

// console.log(totalCandies);

// Conditionals and Functions

// Loops

function fahrenheitToCelsius(temperature) {
	let battleTemp = (temperature - 32) * (5 / 9);
	return battleTemp;
}

function charmanderBattle(currentTemp) {
	let x = fahrenheitToCelsius(currentTemp);
	if (x >= 0) {
		return 'Charmander, I choose you!';
	} else {
		return 'Come back Charmander';
	}
}

// console.log(charmanderBattle(275))

// Loops

function pikachuLoop(pokemon) {
	// let i = 1;
	// while (i < pokemon){
	//     console.log('Pikachu, I choose you!')
	//     i++
	// }
	for (let i = 1; i <= pokemon; i++) {
		console.log('Pikachu, I choose you!');
	}
}

// pikachuLoop(10)

// Arrays

function reverseMistyList(array) {
	return array.reverse();
}

// console.log(reverseMistyList(['Banana', 'Orange', 'Apple', 'Mango']));

function compareArrays(a, b) {
	return (
		a.reduce((acc, c) => acc + c ** 2, 0) >
		b.reduce((acc, c) => acc + c ** 3, 0)
	);
}

// console.log(compareArrays([2, 2, 2], [2, 2, 2]));

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] => [-6, 32, 25]

function multipleArray(arrList) {
	// let x = []
	// for (i = 0; i <= arrList.length; i++) {
	//     if (arrList[i] % i == 0){
	//         x.push(arrList[i])
	//     }
	// }
	// return x
	return arrList.filter((e, i) => e % i === 0);
}

// console.log(multipleArray([68, -1, 1, -7, 10, 10]));

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

function sumArray(arrayList) {
	return arrayList.reduce((acc, c) => acc + Number(c), 0);
}

console.log(sumArray([1, 2, '3', '4']));
