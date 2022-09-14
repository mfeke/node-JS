 var http = require("http")
 var fs =  require("fs")
 var url =  require("url")

 
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
      }  
    })

})