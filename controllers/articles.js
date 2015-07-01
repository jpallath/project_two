var express = require('express'),
    router  = express.Router(),
    marked  = require('marked')
    Article = require('../models/article.js');

  router.use(function (req, res, next) {
    if (req.session.currentUser){
      res.locals.controller = 'articles';
      res.locals.currentUser = req.session.currentUser;
      res.locals.currentId = req.session.currentId;
      next();
      } else{
        res.redirect(301, "/users/login")
        }
        console.log("Hey",res.locals);
        });

  //Index
  router.get('/', function(req, res){
    Article.find({},function(err,articlesArray){
      if (err){
        console.log("There was an error!: ", err);
      } else {
        res.render('articles/index',{articles: articlesArray});
      };
    });
  });


  //New
  router.get('/new', function(req, res){
    res.render('articles/new');
  });


  //Create
  router.post('/', function(req, res){
    if (req.session.currentUser) {
      req.body.article.author = req.session.currentUser;
    } else {
      console.log('it happened here')
      res.redirect(301, "/users/login")
    }

    // req.body.article.author = req.session.currentUser;

    var newArticle = new Article(req.body.article);
    newArticle.save(function(err, article){
      if (err) {
        console.log(err);
      } else {
        article.contentMarked = marked(article.content)
        console.log(article.contentMarked)
        res.redirect(301, '/articles')
      }
    })
  })


  //Show
  router.get("/categories", function(req, res){
    Article.find({},function(err,articlesArray){
    res.render('articles/categories', {articles: articlesArray})
  })});

  router.get('/:id', function(req, res){
    var mongoId = req.params.id;
    console.log("This particular mongoId is: ", mongoId);
    Article.findOne({_id:mongoId}, function(err, foundArticle){
      if (err){
        console.log("the error: ", err);
      } else {
        foundArticle.content = marked(foundArticle.content);
        res.render('articles/show',{article: foundArticle})
      }
    })
  })


  //Delete
  router.delete('/:id', function(req, res){
    var mongoId= req.params.id;
    Article.remove({_id:mongoId}, function(err, foundArticle){
      res.redirect(301, '/articles');
    });
  });


  //Edit
  router.get('/:id/edit', function(req, res){
    var mongoId = req.params.id;
    Article.findOne({_id:mongoId}, function(err, foundArticle){
      if (err){
        console.log(err);
      } else {
        res.render('articles/edit', {article:foundArticle});
      };
    });
  });


  //Update
router.patch('/:id', function(req, res){
  var mongoId = req.params.id;
  var updatedArticle = req.body.article;
  Article.update({_id:mongoId}, updatedArticle, function(err, foundArticle){
    if (err){
      console.log("err")
    } else {
      res.redirect(301, '/articles/' + mongoId)
    };
  });
});


  //export
  module.exports=router;
