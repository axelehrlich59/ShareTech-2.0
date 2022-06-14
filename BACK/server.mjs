import express from "express";
import mongoose from "mongoose";
import "./connect.mjs"
import path from 'path';
import cors from "cors"

const db = mongoose.connection;
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
