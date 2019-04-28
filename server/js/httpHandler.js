const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const queue = require('./messageQueue.js');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
var validMessages = ['up', 'left', 'down', 'right']

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  // console.log(req.url)
  // console.log(req.method)
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end()
  } 
  else if (req.method === 'GET') {
    if (req.url === '/move') {
      res.writeHead(200, headers)
      res.end(queue.dequeue() || '')
    }
     else if (req.url === '/background.jpg') {
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404)
        } else {
          res.writeHead(200, headers);
        
          res.write(data, 'binary');
        }
        res.end();
        next();
      })
    }
  } 
  else if (req.method === 'POST' && req.url === '/background.jpg') {
    let image = Buffer.alloc(0);

    req.on('data', (chunk) => {
      image = Buffer.concat([image, chunk]);
    })
    req.on('end', () => {
      var file = multipart.getFile(image)
      fs.writeFile(module.exports.backgroundImageFile, file.data, (err) => {
        res.writeHead(err ? 400 : 201, headers);
        res.end();
        next();
      })
    })
  }
  
};

