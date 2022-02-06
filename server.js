var express = require('express');
var moment = require('moment');
var app = express();
var fs = require('fs');
var dir_path = "C:\\GUVI\\temp\\";
var current_ts = new Date();
var extension = ".txt";
// var content = Date.now();

const format1 = "YYYY-MM-DD-HH-mm-ss"
var now = moment(current_ts).format(format1);
var content = moment().unix().toString();

var fileName = dir_path + now + extension;

app.get('/test',function(req,res){
    res.send("test call is working");
})

app.post('/createFolder', function (req, res) {
    // console.log("FIlename %s", fileName);
    // console.log("Content %s", content);
    fs.writeFile(fileName, content, err => {
        if (err) {
            console.log(err);
            return
        }
        res.send("File created successfully");
        res.end();
    })
})

var server = app.listen(8081, function () {
    console.log("Server is running");
})