/**
 * Created by swarn on 28/09/15.
 */

    var exec=require("child_process").exec;
var start = function (response) {
    //var sleep = function(milliseconds)
    //{
    //    var startTime=new Date().getTime();
    //    while(new Date().getTime()<startTime+milliseconds);
    //};
    //sleep(10000);
    console.log("Request handler start was called");
    var content = "empty"
    exec("ls -lah",function(error, stdout, stderr)
    {
        content=stdout;
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(content);
        response.end();
    });

};
var upload = function (response) {
    console.log("request handler upload was called");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello upload");
    response.end();
};

exports.start = start;
exports.upload = upload;
