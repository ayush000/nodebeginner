/**
 * Created by socomo14 on 9/28/15.
 */
var http=require('http');
var url=require('url');

function start(route,handle) {
    var onRequest=function (request, response) {
        var postData="";
        var pathname=url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");
        request.setEncoding('utf8');
        request.addListener("data",function(postDataChunk)
        {
            postData+=postDataChunk;
            console.log("Received post data chunk '"+postData+" '");
        });
        request.addListener("end",function()
        {
            route(handle,pathname,response,postData);
        });
        //route(pathname);
        //route(handle,pathname,response);
        //response.writeHead(200, {"Content-type": "text/plan"});
        //response.write("Hello World");
        //response.write(content);
        //response.end();
    };
    http.createServer(onRequest).listen(8889);
    console.log("Server has started");
}

exports.start=start;