const mongoose = require("mongoose")
var Schema = mongoose.Schema;


var schemaArticle = new Schema({
  id: String,
  text: String,
}, {
  collection: 'articles'
});

var Model = mongoose.model('Model', schemaArticle)

const ArticleModel = mongoose.model('Article', {
  text: { type: String }
})

module.exports = {
  schemaArticle,
  Model,
  ArticleModel,
}