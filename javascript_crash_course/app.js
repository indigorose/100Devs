//--Easy

//create a variable and assign it a number

let num = 15;

// minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);

//---Medium

//create a variable that holds a value from the input

//let x = Number(document.querySelector('#value').value);

//add 25 to that number

//x += 25;

//alert that number

//alert(x);

//---Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1');

//add an event listener that element that console logs the sum of the two previous variables.

h1.addEventListener('click', addTwo);

function addTwo() {
	let x = Number(document.querySelector('#value').value);
	x += 25;
	console.log(num + x);
}

//--Easy

//create a function that subtracts two numbers and alerts the difference
function subTwo(x, y) {
	alert(x - y);
}

//create a function that divides three numbers and console log the quotient
function divThree(x, y, z) {
	console.log(x / y / z);
}

//create a function that multiplies three numbers
function multiThree(x, y, z) {
	console.log(x, y, z);
}

//---Medium
//create a function that takes in three numbers, Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number.

function sumAndDivide(x, y, z) {
	return (x + y) % z;
}

//--Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together an alert the remainder of dividing the fourth number.

function fuckAroundAndMathOut(x, y, z, a) {
	let product = x * y;
	if (product > 100) {
		console.log(product + z + a);
	} else if (product < 100) {
		console.log(product - z - a);
	} else {
		alert((x * y * z) % a);
	}
}
