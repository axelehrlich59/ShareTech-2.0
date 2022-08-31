console.clear()
const express = require("express")
const app = express();
const connect = require("./connect.js")
const path = require("path")
const routes = require("./routes/index.js")

app.use(routes)
