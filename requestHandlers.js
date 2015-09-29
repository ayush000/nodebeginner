/**
 * Created by swarn on 28/09/15.
 */

    //var exec=require("child_process").exec;
var querystring =require('querystring');
var fs=require('fs');
var start = function (response,postData) {
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+ '</form>'+
        '</body>'+
        '</html>';

    //var sleep = function(milliseconds)
    //{
    //    var startTime=new Date().getTime();
    //    while(new Date().getTime()<startTime+milliseconds);
    //};
    //sleep(10000);
    console.log("Request handler start was called");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();

};
var upload = function (response,postData) {
    console.log("request handler upload was called");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("You've sent "+querystring.parse(postData).text);
    response.end();
};
var show = function(response,postData)
{
    console.log("Request handler for show was called");
    fs.readFile("tmp/random_detail.jpg","binary",function(error,file)
    {
        if(error)
        {
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(error+"\n");
            response.end();
        }
        else
        {
            response.writeHead(200,{"Content-Type":"image/jpg"});
            response.write(file,"binary");
            response.end();
        }
    })
};

exports.start = start;
exports.upload = upload;
exports.show=show;