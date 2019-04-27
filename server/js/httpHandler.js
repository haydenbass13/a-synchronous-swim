const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
var validMessages = ['up', 'left', 'down', 'right']

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  // const {method, url} = req

  req.on('error', (err) => {
    console.error(err)
  }).on('end', () => {
    
    res.on('error', (err) => {
      console.log(err)
    })
    res.writeHead(200, headers);
  })
  if(req.method === 'GET'){
    let randCommand = validMessages[Math.floor(Math.random() * 3)]
    res.write(randCommand)
  }
  res.end();
};

  // server.mock(?, 'GET')?

  // if(req.method === 'GET){
  // Math.floor(Math.random() * 5)
  // let randCommand = get random command from number
  // res.end(randCommand)
  //}
  // res._data === randCommand
  // if(req.method === 'POST')
  // do shit
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