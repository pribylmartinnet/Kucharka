const express = require("express")
const math = require("../math")
const db = require("../db")
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
        let topic = req.body.topic
        let desc = req.body.dessription
        console.log(topic)
    res.status(201).send("A topic was created")
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
        console.log(id)
    res.status(201).send("A topic: " + id)
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})

router.get("/list", function (req, res){
    try {
        console.log(id)
    res.status(201).send("List")
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})






module.exports = router

