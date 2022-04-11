require("dotenv").config()
const express = require("express")
const topicController = require("./controllers/topic")
const cors = require('cors');

const math = require("./math")
let app = express()
app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.use("/topic", topicController)


app.listen(process.env.APP_PORT)
