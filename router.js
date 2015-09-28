/**
 * Created by swarn on 28/09/15.
 */

var route = function (handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    }
    else {
        console.log("No request handler found for " + pathname);
    }
};
exports.route = route;