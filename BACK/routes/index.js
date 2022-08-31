console.clear()
const express = require("express")
const app = express();
const cors = require("cors")

const corsOptions = {
  origin: "http://localhost:4200", 
  credentials:true,
  optionSuccessStatus:200,
}

const mongoose = require("mongoose")

const router = express.Router()
const db = mongoose.connection;
var Schema = mongoose.Schema;

const port = 8000

app.use(cors(corsOptions))

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(router)


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

router.post('/stored', (req, res) => {
  try {
    db.collection('articles').insertOne(req.body, (err, data) => {
      if(err) console.log(err);
      return res.status(200).send("SUCCESS")
  })} catch(err) {
    console.log(err)
    return res.status(500).send()
  }
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
});

router.get('/success', function (req, res) {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
})

router.put('/update/:id', (req, res) => {
  ArticleModel.updateOne({_id: req.params.id}, {$set:{text: req.body.text}}).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.delete('/delete/:id', (req, res) => {
  var articleId = String(req.params.id);
  
  ArticleModel.findByIdAndDelete(articleId, (err, doc) => {
      if (err) return res.status(500).json(err);

      if (doc === null) {
        return res.status(404).json({ message: 'Article inconnu' })
      }
      const response = {
        message: "Article is deleted to db",
        id: articleId
      };
      return res.status(200).send(response);
  });
});

router.get('/articles', cors(corsOptions), function(req, res) {
  Model.find({}, function(err, result) {
      if (err) throw err;
      if (result) {
        // res.json(result)
        res.send(result)
      } else {
          res.send(JSON.stringify({
            error : 'Error'
        }))
      }
  })
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
  })

module.exports = router