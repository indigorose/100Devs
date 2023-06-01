console.log('hello');
// callbacks and higher functions
// function houseOne() {
// 	console.log('Paper delivered to house one');
// }
// function houseTwo(callback) {
// 	setTimeout(() => {
// 		console.log('Paper delivered to house two');
// 		callback();
// 	}, 3000);
// }

// function houseThree() {
// 	console.log('Paper delivered to house three');
// }

// houseOne();
// houseTwo(houseThree);

// Callback hell example. Nesting callbacks isnt great.

// function houseOne() {
// 	setTimeout(() => {
// 		console.log('Paper delivered to house 1');
// 		setTimeout(() => {
// 			console.log('Paper delivered to house 2');
// 			setTimeout(() => {
// 				console.log('Paper delivered to house 3');
// 			}, 3000);
// 		}, 4000);
// 	}, 5000);
// }

// Promises

// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if (!error) {
//         resolve('Promise has been fulfilled')
//     } else {
//         reject('Error: Operation has failed')
//     }
// })

// console.log(promise)
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
