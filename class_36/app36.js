// async function getACuteDogPhoto() {
// 	const res = await fetch('https://dog.ceo/api/breeds/image/random');
// 	const data = await res.json();
// 	console.log(data);
// }

// getACuteDogPhoto();

function houseOne() {
	console.log('Paper delivered to house 1');
}

function houseTwo() {
	setTimeout(() => console.log('Paper delivered to house 2'), 3000);
}

function houseThree() {
	setTimeout(() => console.log('Paper delivered to house 3'), 3000);
}

houseOne();
houseTwo();
houseThree();

/* The event loop monitors the callback queue and job queue and decides what needs to be pushed to the call stack */

// A call stack is a last thing in, first thing out data structure
// Queues are a first in, first out data structure
