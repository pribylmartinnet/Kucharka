require("dotenv").config()
const express = require("express")
const topicController = require("./controllers/topic")

const math = require("./math")
let app = express()
app.use(express.json())
app.use("/topic", topicController)



app.listen(process.env.APP_PORT)
