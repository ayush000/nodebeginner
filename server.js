/**
 * Created by socomo14 on 9/28/15.
 */
var http=require('http');
var url=require('url');

function start(route,handle) {
    var onRequest=function (request, response) {
        var pathname=url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");

        //route(pathname);
        route(handle,pathname);

        response.writeHead(200, {"Content-type": "text/plan"});
        response.write("Hello World");
        response.end();
    };
    http.createServer(onRequest).listen(8889);
    console.log("Server has started");
}
exports.start=start;