// var http = require('http'); // Import Node.js core module
// var fs = require('fs'); // Import the file system module
// var path = require('path');
//
//
// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/' || req.url == '/aboutUs.html') { //check the URL of the current request
//
//
//       // Read the HTML file
//           fs.readFile('home.html', (err, data) => {
//             if (err) {
//               res.writeHead(500);
//               res.end(`Error loading file: ${err}`);
//             } else {
//               res.writeHead(200, { 'Content-Type': 'text/html' });
//               res.end(data);
//             }
//           });
//
//     }
//     else if (req.url == "/aboutUs" || req.url == '/aboutUs.html') {
//
//       fs.readFile('aboutUs.html', (err, data) => {
//           if (err) {
//               res.writeHead(500);
//               res.end(`Error loading file: ${err}`);
//           } else {
//               res.writeHead(200, { 'Content-Type': 'text/html' });
//               res.end(data);
//           }
//       });
//
//     }
//     else if (req.url == "/admin") {
//
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
//
//     }
//     else {
//         var filePath = '.' + req.url;
//         var extname = path.extname(filePath);
//         var contentType = 'text/html';
//         switch (extname) {
//             case '.jpg':
//                 contentType = 'image/jpeg';
//                 break;
//             case '.png':
//                 contentType = 'image/png';
//                 break;
//         }
//         fs.readFile(filePath, function(error, content) {
//             if (error) {
//                 if(error.code == 'ENOENT'){
//                     res.writeHead(404);
//                     res.end('404 Not Found');
//                 }
//                 else {
//                     res.writeHead(500);
//                     res.end(`Error loading file: ${error}`);
//                 }
//             }
//             else {
//                 res.writeHead(200, { 'Content-Type': contentType });
//                 res.end(content);
//             }
//         });
//     }
//
// });
//
// server.listen(3000); //6 - listen for any incoming requests
//
// console.log('Node.js web server at port 3000 is running..')







const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (filePath === './') {
    filePath = './home.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  let contentType = 'text/html';

  switch (extname) {
    case '.html':
      contentType = 'text/html';
      break;
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
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    default:
      contentType = 'application/octet-stream';
  }

  filePath = path.join(__dirname, filePath);
  const readStream = fs.createReadStream(filePath);

  readStream.on('error', function (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 Not Found</h1>');
      res.end();
    } else {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write(`<h1>500 Internal Server Error</h1> ${err}`);
      res.end();
    }
  });

  res.writeHead(200, { 'Content-Type': contentType });
  readStream.pipe(res);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
