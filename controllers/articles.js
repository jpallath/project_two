var express = require('express'),
    router  = express.Router(),
    Article = require('../models/article.js');


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
    var newArticle = new Article(req.body.article);
    newArticle.save(function(err, article){
      if (err) {
        console.log(err);
      } else {
        console.log(article)
        res.redirect(301, '/articles')
      }
    })
  })


  //Show
  rouuter.get('/:id', function(req, res){
    var mongoId = req.params.id;
    console.log("This particular mongoId is: ", mongoId);
    Article.findOne({_id:mongoId}, function(err, foundArticle){
      if (err){
        console.log("the error: ", err);
      } else {
        res.render('articles/show',{article: foundArticle})
      }
    })
  })
  //Delete
  //Edit
  //Update

  //export
  module.exports=router;
