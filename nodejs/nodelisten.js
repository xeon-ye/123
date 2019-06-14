var http = require("http");

var server = http.createServer(function (req,res) {
console.log("服务器接收到了请求" + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    res.end('Hello World\n');
    // res.end();
});
server.listen(3000,"192.168.1.103");