console.clear()
const express = require("express")
const app = express();
require('dotenv').config()
const cors = require("cors")
const Cookies = require( "cookies" );
const JsonWebToken = require("jsonwebtoken")
const Bcrypt = require("bcryptjs");
const {Model, ArticleModel} = require("../Models/articles.js")
const {User} = require('../Models/users.js')
const {fetchUserByToken} = require("../utils/functions.js");

const corsOptions = {
  origin: "http://localhost:4200", 
  credentials:true,
  optionSuccessStatus:200,
}

const router = express.Router()
const mongoose = require("mongoose")
const db = mongoose.connection;


const port = 8000

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(router)




router.post('/stored', fetchUserByToken, (req, res) => {
  try {
    db.collection('articles').insertOne(req.body, (err, data) => {
      if(err) console.log(err);
      return res.status(200).send("SUCCESS")
  })} catch(err) {
    console.log(err)
    return res.status(500).send()
  }
});

router.post('/createUser', (req, res) => {
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, error: "Missing parameters" })
    return;
  }

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: Bcrypt.hashSync(req.body.password, 10)
  }).then(user => {
    const token = JsonWebToken.sign({ id: user._id, email: user.email}, process.env.SECRET_JWT_CODE)
    res.json({ success: true, token: token})
  }).catch(err => {
    res.json({ success: false, error: err})
  })
});

router.post('/login', (req, res) => {
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, error: "Missing parameters" })
    return;
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if(!user) {
      console.log("pas user")
      res.json({ success: false, error: "User does not exist"})
    } else {
      if(!Bcrypt.compareSync(req.body.password, user.password)) {
        console.log("mauvais mdp")
        res.json({ success: false, error: "Wrong password"})
      } else {
        const token = JsonWebToken.sign({ id: user._id, email: user.email}, process.env.SECRET_JWT_CODE, {expiresIn: 604800})
        new Cookies(req,res).set('access_token', token, {httpOnly: false, secure: false });
        res.json({ success: true, token: token})
      }
    }
  }).catch(err => {
    console.log("erreur")
    res.json({ success: false, error: err})
  })
});


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
});

router.get("/logout", fetchUserByToken, (req,res)=>{
  res.status(202).clearCookie('access_token').send('cookie cleared')
});

router.get('/success', function (req, res) {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
})

router.put('/update/:id', fetchUserByToken, (req, res) => {
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

router.delete('/delete/:id', fetchUserByToken, (req, res) => {
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