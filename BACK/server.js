import express from "express"
import mongoose from "mongoose";
import "./connect.js"
import path from 'path';
import cors from "cors"


const db = mongoose.connection;
const app = express();
const __dirname = path.resolve();

const port = 8000


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
});

app.post('/stored', (req, res) => {
  try {
    db.collection('articles').insertOne(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })} catch(err) {
    console.log('err ===== ', err)
  }
  
  console.log('Article crée !')
});