/**
 * Created by socomo14 on 9/28/15.
 */
var server = require("./server");
var router=require("./router");
server.start(router.route);