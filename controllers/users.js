var express = require ('express'),
    router  = express.Router(),
    User    = require('../models/user.js');

router.use(function (req, res, next) {
  res.locals.controller = 'users';
  next();
});

//Index (Maybe Log-In?)
router.get('/', function(req, res){
  User.find({}, function(err, usersArray){
    if (err) {
      console.log("CANT FIND USERS");
    } else {
      res.render('users/index',{user: usersArray});
    };
  });
});
router.get('/login', function(req, res){
  res.render('users/login');
})
router.post('/login', function(req, res){
  var attempt = req.body.user;
  User.findOne({username: attempt.username}, function(err, found){
    if (found && found.password === attempt.password){
      console.log("here");
      req.session.currentUser = found.username;
      req.session.currentId = found._id;
      console.log(req.session);
      res.redirect(301, "/articles")
    } else {
      console.log("null")
      res.redirect(301, "/users/login")
    }
  })
})
//New
router.get('/new', function(req,res){
  res.render('users/new');
});
//Create
router.post('/', function(req, res){
  User.create(req.body.user, function (err, user) {
    if(err) {
      console.log(user);
    } else {
      res.redirect(301, '/users');
    }
  })
})
//Show
router.get('/:id', function(req, res){
  var mongoId = req.params.id;
  User.findOne({_id:mongoId}, function(err, foundUser){
    if (err){
      console.log("Whoops");
    } else {
      res.render('users/show',{user: foundUser})
    }
  })
});
//Delete
router.delete('/:id', function(req, res){
  var mongoId = req.params.id;
  User.remove({_id:mongoId}, function(err, foundUser){
    res.redirect(301, '/users')
  });
});
//Edit
router.get('/:id/edit', function(req, res){
  var mongoId = req.params.id;
  User.findOne({_id:mongoId}, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      res.render("users/edit", {user:foundUser});
    };
  });
})
//Update
router.patch('/:id', function(req, res){
  var mongoId = req.params.id;
  var updatedUser = req.body.user;
  User.update({_id:mongoId}, updatedUser, function(err, foundUser){
    if(err){
      console.log("woah");
    } else {
      res.redirect(301, '/users/' + mongoId)
    }
  })
})
//Export
module.exports = router;
