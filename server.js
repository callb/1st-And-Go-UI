var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//var passport = require('passport');


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(cookieParser());
//app.use(session({secret: "thesecret"}));

//app.use(passport.initialize());
//app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require ("./test/app.js")(app);


//var project = require('./public/js/app.js');
//project(app);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


app.listen(server_port, server_ip_address);