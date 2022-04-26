const express = require("express")
const math = require("../math")
const db = require("../db")
const { request } = require("express")
const router = express.Router()


router.get("/sum", function (req, res) {
    
    try {
        res.status(200).send(math.sum(Number(req.query.a), Number(req.query.b)))
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})

router.get("/", function (req, res) {
    db.run()
    res.status(200).send("Ahoj")
})

router.post("/", function (req, res) {
    try {
        let topic = {
            topic: req.body.topic,
            description: req.body.description
        }
        
        db.insertTopic(topic)
        console.log(topic)
    res.status(201).send("A topic was created")
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})

router.get("/list", async function (req, res){
    try {
        const topics = await db.listTopic()
        res.status(201).send(topics)
    } catch (err){
        res.status(401).send("Bad request " + err )
    }    
})


router.post("/list", async function (req, res){
    try {
        console.log(req.body.topic) 
        const topics = await db.listTopic(req.body.topic)
        res.status(201).send(topics)
    } catch (err){
        res.status(401).send("Bad request " + err )
    }    
})


router.post("/picture", async function (req, res){
    try {

        const pic = {
            topicId: req.body.id,
            picture: req.body.picture
        }
    
        const topics = await db.insertPicture(pic)
        res.status(201).send("Picture was saved")
    } catch (err){
        res.status(401).send("Bad request " + err )
    }    
})


router.get("/:id", function (req, res) {
    try {
        let id = req.params.id
        console.log(id)
    res.status(201).send("A topic: " + id)
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})


router.delete("/:id", function (req, res){
    try {
        let id = req.params.id
        db.deleteTopic(id)
        console.log(id)
    res.status(201).send("A topic: " + id)
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})




module.exports = router

