const http = require('http');

let server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('[1,2,3,4,5]');
    res.end();
});

server.listen(8080);