import express from "express";
import mongoose from "mongoose";
import "./connect.mjs"
import path from 'path';
import cors from "cors"

const db = mongoose.connection;
var Schema = mongoose.Schema;
const app = express();
const __dirname = path.resolve();

const port = 8000
const router = express.Router()

const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

var schemaArticle = new Schema({
  id: String,
  text: String,
}, {
  collection: 'articles'
});

var Model = mongoose.model('Model', schemaArticle)

const DeleteModel = mongoose.model('Article', {
  text: { type: String }
})

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
});

router.get('/success', function (req, res) {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
})

router.post('/stored', (req, res) => {
  try {
    db.collection('articles').insertOne(req.body, (err, data) => {
      if(err) return console.log(err);
      res.redirect('/')
  })} catch(err) {
    console.log('err ===== ', err)
  }
  console.log('Article crée !')
});

router.delete('/delete/:id', (req, res) => {
  var idToRemove = String(req.params.id);
  
  DeleteModel.findByIdAndDelete(idToRemove, (err, doc) => {
      if (err) return res.status(500).json(err);

      if (doc === null) {
        res.status(404).json({ message: 'Article inconnu' })
      }
      const response = {
        message: "Article is deleted to db",
        id: idToRemove
      };
      return res.status(200).send(response);
  });
});

router.get('/articles', cors(), function(req, res) {
  var query = req.params.query;

  Model.find({
      'request': query
  }, function(err, result) {
      if (err) throw err;
      if (result) {
        res.json(result)
      } else {
          res.send(JSON.stringify({
            error : 'Error'
        }))
      }
  })
})