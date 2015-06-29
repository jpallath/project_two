var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var articleSchema = Schema({
    title: {type: String, required: true},
    author: String,
    content: String
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
