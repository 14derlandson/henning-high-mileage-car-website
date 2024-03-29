var nodestatic = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(nodestatic.Server)('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(8080);