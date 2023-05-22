const fs = require('fs');
const path = require('path');

// Create folder
/*  Inside the below, we are joining the paths, creating a new directory, 
in the new folder 'test', there are no options in the example so an empty '{}' 
and then we have a conditional error check. */
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...')
// })

// Create and write to file. Please note use this one to initiate the file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello World', (err) => {
// 	if (err) throw err;
// 	console.log('File created and written to...');

// Do the below to append to the file.
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//     'I love Node.js',
//     err => {
//         if (err) throw err;
//         console.log('File has been updated.')
//     })
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data)
//     });

// Rename file
// fs.rename(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	path.join(__dirname, 'test', 'helloworld.txt'),
// 	(err) => {
// 		if (err) throw err;
// 		console.log('File has been updated.');
// 	}
// );
