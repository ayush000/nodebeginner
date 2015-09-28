/**
 * Created by swarn on 28/09/15.
 */
var start = function () {
    console.log("Request handler start was called");
};
var upload = function () {
    console.log("request handler upload was called");
};

exports.start = start;
exports.upload = upload;
