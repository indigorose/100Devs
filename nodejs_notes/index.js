// Access person.js

// const person = require('./person')

// After we can call the information. This case person is an object so dot notation can be used.
// console.log(person.name)

// Accessing the class Person - use capitalisation
// const Person = require('./person')

// We can create a new object once we have established access above.
// const person1 = new Person('John Doe', 30)
// And call the function from the class.
// person1.greeting()

// Run node index in the terminal to see the console.log return.

const http = require('http');

const path = require('path');

const fs = require('fs');

const server = http.createServer((req, res) => {
	// if (req.url === '/') {
	// 	fs.readFile(
	// 		path.join(__dirname, 'public', 'index.html'),
	// 		(err, content) => {
	// 			if (err) throw err;
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.end(content);
	// 		}
	// 	);
	// }
	// if (req.url === '/about') {
	// 	fs.readFile(
	// 		path.join(__dirname, 'public', 'about.html'),
	// 		(err, content) => {
	// 			if (err) throw err;
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.end(content);
	// 		}
	// 	);
	// }

	// Making the file path dynamic
	let filePath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	);
	// console.log(filePath)
	// res.end();

	// extention of the file
	let extname = path.extname(filePath);

	// Initial content type

	let contentType = 'text/html';

	//  check the ext and set content type

	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	// read file

	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code == 'ENOENT') {
				// page not found
				fs.readFile(
					path.join(__dirname, 'public', '404.html'),
					(err, content) => {
						res.writeHead(200, { 'Content-Type': 'text/html' });
						res.end(content, 'utf8');
					}
				);
			} else {
				// Some server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			// Success
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf8');
		}
	});
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Optional with api data

/* 

if (req.url === '/api/users') { 
    const users = [
        {name: 'Bob Smith', age: 40},
        {name: 'John Doe', age: 30}
    ];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}


*/
