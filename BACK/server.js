import express from "express"
import "./connect.js"
import path from 'path';


const app = express();
const __dirname = path.resolve();

const port = 8000

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONT/public", "index.html"));
});