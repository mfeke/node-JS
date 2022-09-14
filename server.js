 var http = require("http");
 var fs =  require("fs");
 var url =  require("url");

 
//  Create a server
http.createServer(function(request, response){
    // PARSE THE REQUEST CONTAINING FILE NAME 
    var pathname = url.parse(request.url).pathname;

    // PRINT THE NAME OF THE FILE FOR WHICH REQUEST IS MADE
    console.log("Request for"+ pathname+"recived");

    // READ THE REQUEST FILE  CONTENT FROM FILE SYSTEM
    fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
        console.log(err);
        
        // HTTP STATUS: 404 : NOT FOUND 
        // CONTENT TYPE : TEXT/PLAIN
        response.writeHead(404, {"Content-Type": "text/html"});
      }  else{
        // PAGE FOUND
        // HTTP STATUS : 200 :OK
        // Content Type : text / plain
        response.writeHead(200, {"Content": "text/html"});

        // Write the content of the file to response body 
        response.write(data.toString());

      }
      // Send the response body
      response.end();


     
    });


}).listen(8081)

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');