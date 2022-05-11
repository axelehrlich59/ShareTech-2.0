import mongoose from "mongoose";
import { User } from "./users.js"
console.clear()

console.log('User ===== ', User)

const username = "yaaz";
const password = "root";
const cluster = "sharetech";
const dbName = "ShareTech";

const mongoURL = `mongodb+srv://${username}:${password}@${cluster}.4lksj.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(mongoURL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
// const user = db.collection('user');
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const createUser = async userData => {
  const user = await User.create(userData)
  return user
 }

// const createUser = async object => {
//   const collection = db.collection('user');
//   const user = await collection.insertOne(object);
//   return user
// }

// const newUser = {
//   name:"Ryan",
//   email: "riri_étudiant@gmail.com",
//   status:"étudiant"
// }

// const insertStudent = await createUser(newUser)
// console.log(newUser)