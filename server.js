const http = require('http');
const fs = require('fs');

const port = 9999;

const getFileExtension = function(filename){
  return filename.slice(filename.lastIndexOf('.'));
}

const getContentType = function(url){
  let fileExtension = getFileExtension(url);
  let type = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.ico': 'image/x-icon'
  }
  return type[fileExtension];
}

const redirectOn = function(res,destinationUrl){
  res.writeHeader(302, {"Location": destinationUrl})
  res.end();
}

const requestHandler = function(req,res){
  let url = req.url;
  if (url == '/') return redirectOn(res,"/typingLetter.html");
  res.setHeader('Content-Type',getContentType(url))
  res.write(fs.readFileSync('.'+url));
  res.end();
}

const server = http.createServer(requestHandler);
server.listen(port);
console.log(`listening on ${port}`);
