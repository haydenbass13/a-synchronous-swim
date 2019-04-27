
require('./js/keypressHandler').initialize();
const httpHandler = require('./js/httpHandler');

const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);





// const http = require('http');

// http.createServer((request, response) => {
//   const { headers, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // BEGINNING OF NEW STUFF

//     response.on('error', (err) => {
//       console.error(err);
//     });

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.writeHead(200, {'Content-Type': 'application/json'})

//     const responseBody = { headers, method, url, body };

//     response.write(JSON.stringify(responseBody));
//     response.end();
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))

//     // END OF NEW STUFF
//   });
// }).listen(8080);

// // const server = http.createServer();
// server.on('request', (request, response) => {
//   // the same kind of magic happens here!
// });

// const req = http.request({
//   host: '127.0.0.1',
//   port: 8080,
//   method: 'POST'
// }, (res) => {
//   res.resume();
//   res.on('end', () => {
//     if (!res.complete)
//       console.error(
//         'The connection was terminated while the message was still being sent');
//   });
// });



// const http = require('http');

// http.createServer((request, response) => {
//   const { headers, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // At this point, we have the headers, method, url and body, and can now
//     // do whatever we need to in order to respond to this request.
//   });
// }).listen(8080); // Activates this server, listening on port 8080.