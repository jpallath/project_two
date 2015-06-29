var express      = require('express'),
	server         = express(),
	ejs            = require('ejs'),
	bodyParser     = require('body-parser'),
	methodOverride = require('method-override'),
	expressLayouts = require('express-ejs-layouts'),
	morgan         = require('morgan'),
	mongoose       = require('mongoose'),
	session        = require('express-session'),
	marked         = require('marked');

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
var articleController = require ('./controllers/articles.js');
server.use('/articles', articleController);
server.get('/', function(req, res){
  res.render('welcome');
});

//Catchall Routes
server.use(function(req, res){
  res.send("This page is under construction")
})

//Database Server Start
mongoose.connect('mongodb://localhost:27017/jerrkipedia');
var db = mongoose.connection;

db.on('error', function(){
  console.log("ERROR OVERLOAD");
});

db.once('open', function(err){
  console.log("Error was: ", err);
  console.log("Database is set to stun");
  server.listen(3000, function(){
    console.log("Server is set to stun")
  });
});
