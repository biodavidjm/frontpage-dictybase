'use strict';

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var fs = require('fs');

var currentDir = process.cwd();

var app = express();

var logStats = fs.statSync(currentDir +'/log');

if (logStats.isDirectory()) {
    var logFile = path.join(currentDir + '/log', 'frontend-server.log');
    var logStream = fs.createWriteStream(logFile, {flags: 'a'});
    app.use(morgan('combined', {stream: logStream}));
    console.log('start writing to %s log file',logFile);
}
else {
    app.user(morgan('combined'));
}

var staticStats = fs.statSync( currentDir + '/www');
if (staticStats.isDirectory()) {
    app.use('/', express.static(currentDir + '/www'));
    var server = app.listen(9596);
    console.log('Express static server listening on http://%s:%d', server.address().address,9596);
}
else {
    console.log('No /www folder, did not start the server');
}