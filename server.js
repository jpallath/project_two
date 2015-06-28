var express      = require('express'),
	server         = express(),
	ejs            = require('ejs'),
	bodyParser     = require('body-parser'),
	methodOverride = require('method-override'),
	expressLayouts = require('express-ejs-layouts'),
	morgan         = require('morgan'),
	mongoose       = require('mongoose'),
	session        = require('express-session');

// Set
server.set('views', "./views");
server.set('view engine', 'ejs');
//Use
// **Remember to add session here**
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static('./public'));
server.use(methodOverride('_method'));
server.use(morgan('short'));
server.use(expressLayouts);
//Routes and Controllers


//Catchall Routes


//Database Server Start
