const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////
// FILES


// Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log(textOut);


// Non blocking, asynchronous way
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {

// 	if(err) return console.log('ERROR! 💥');

// 	fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
// 		console.log(data2);
// 		fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
// 			console.log(data3);

// 			fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
// 				console.log('Your file has been written 😁')
// 			})
// 		});
// 	});
// });
// console.log('Will read the file!');

/////////////////////////////////////
// SERVER
const server = http.createServer((req, res)=>{
	// console.log(req.url);

	const pathName = req.url;
		// res.end('This is the OVERVIEW');
	if(pathName === '/' || pathName === '/overview') {
		res.end('This is the OVERVIEW');

	} else if (pathName === '/product') {
		res.end('This is the PRODUCT');

	} else {
		res.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'hello-world'
		});
		res.end('<h1>Page not found!</h1>');
	}
	// res.end('Hello from the server!');
});
server.listen(8000, '127.0.0.1', () => {
	console.log('Listening to request on port 8000');
});
