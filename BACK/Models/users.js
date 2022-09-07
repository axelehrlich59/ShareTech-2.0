const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var schemaUser = new Schema({
  id: String,
  username: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  email: {
    type: String, 
    required: true, 
    unique: true
  },
}, {
  collection: 'users'
});

const User = mongoose.model('Users', schemaUser)

module.exports = {
  User,
}