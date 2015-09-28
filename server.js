/**
 * Created by socomo14 on 9/28/15.
 */

var start=function() {
    var http = require("http");
    http.createServer(function (request, response) {
        response.writeHead(200, {"Content-type": "text/plan"});
        response.write("Hello World");
        response.end();
    }).listen(8888);
};
exports.start=start;