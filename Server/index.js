require('dotenv').config();
const express = require("express")
const topicController = require("./controllers/topic.js")

let app = express()
app.use(express.json())
app.use('/topic', topicController)

app.listen(8080)
