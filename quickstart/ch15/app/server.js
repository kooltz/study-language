"use strict"
var server = require("./dist/server/server");
var debug = require("debug")("express:server");
var http = require("http");

var httpPort = 8080;
var app = server.Server.bootstrap().app;
app.set("port", httpPort);
var httpServer = http.createServer(app);
httpServer.listen(httpPort);

httpServer.on("error", onError);

httpServer.on("listening", onListening);

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof httpPort === "string" 
        ? "Pipe " + httpPort 
        : "Port " + httpPort;
    
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === "string" 
        ? "pipe " + addr
        : "port " + addr.port;
    console.info("Listening on " + bind);
}
