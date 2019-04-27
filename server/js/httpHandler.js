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

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end()
  } 
  else if (req.method === 'GET') {
    if (req.url === '/move') {
      res.writeHead(200, headers)
      res.end(queue.dequeue() || '')
    }
  } 
  else if (req.method === 'POST') {
    
  }
  
};

