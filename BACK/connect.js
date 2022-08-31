const mongoose = require("mongoose")
console.clear()

const username = "yaaz";
const password = "root";
const cluster = "sharetech";
const dbName = "ShareTech";

const mongoURL = `mongodb+srv://yaaz:${password}@sharetech.4lksj.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoURL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
