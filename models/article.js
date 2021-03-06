var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    var marked = require('marked');

var articleSchema = Schema({
    title: {type: String, required: true},
    author: String,
    content: String,
    category: String,
    image: String,
    edited: {type: Date, default: Date.now}
    // contentMarked: String
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
